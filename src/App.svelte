<script>
  let todos = []
  let todo = {
    id: '',
    text: '',
    estado: false
  }

  if(localStorage.getItem('todos')){
    todos = JSON.parse(localStorage.getItem('todos'))
  }

  $: localStorage.setItem('todos', JSON.stringify(todos))

  const addTodo = () => {
    if(todo.text.length < 4){
      Swal.fire({
        title: 'Error!',
        text: 'El Todo debe tener mas de 4 caracteres',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      todo.text = ''
      return
    }
    todo.id = Date.now()
    todos = [...todos, todo]
    todo = {
      id:'',
      text:'',
      estado:false
    }
    Swal.fire({
      title: 'Agregado',
      text: 'Todo Agregado',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  const delTodo = (id) => {
    todos = todos.filter(item => item.id !== id)
    Swal.fire({
      title: 'Eliminado',
      text: 'Todo Eliminado',
      icon: 'warning',
      confirmButtonText: 'Ok'
    })
  }

  const editTodo = (id) => {
    todos = todos.map(item =>
      item.id === id ?
      {...item, estado: !item.estado}
      : item
    )
    Swal.fire({
      title: 'Editar',
      text: 'Todo aditado',
      icon: 'info',
      confirmButtonText: 'Ok'
    })
  }

  const classIcon = (valor) => (
    valor
    ? 'bi bi-arrow-clockwise'
    : 'bi bi-check'
  )

  const classColor = (valor) => (
    valor
    ? 'btn-success'
    : 'btn-warning'
  )

  const classText = (valor) => (
    valor
    ? 'Redo'
    : 'Ok'
  )
</script>

<main>
  <div class='container'>
  <h1 class='display-5 my-3'>Todos List</h1>
    <form on:submit|preventDefault={addTodo} action="">
      <input
        type="text"
        placeholder="Agregar Todo"
        class="form-control shadow border-0"
        bind:value={todo.text}
      />
    </form>
    {#each todos as item}
      <div class="shadow my-3 p-3 lead">
        <p
          class={item.estado ? 'text-decoration-line-through' : ''}
        >
          {item.text}
        </p>
        <button class="btn btn-sm {classColor(item.estado)}" on:click={editTodo(item.id)}>
          <i class={classIcon(item.estado)}>{classText(item.estado)}</i>
        </button>
        <button class="btn btn-sm btn-danger" on:click={delTodo(item.id)}>
          <i class="bi bi-trash3-fill">Delete</i> 
        </button>
      </div>
      {/each}
      <div class="toast-container position-absolute p-3 top-0 end-0">
        <button 
          type="button" 
          class="btn-close btn-close-white me-2 m-auto" 
          data-bs-dismiss="toast" 
          aria-label="Close"
        />
      </div>
    </div>
</main>
