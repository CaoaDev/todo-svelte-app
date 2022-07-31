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
        id: '',
        text: '',
        estado: false
    }
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu tarea se ha guarado correctamente',
      showConfirmButton: false,
      timer: 1000
    }) 
  }

  const delTodo = (id) => {
    todos = todos.filter(item => item.id !== id)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu tarea se ha eliminado',
      showConfirmButton: false,
      timer: 1000
    }) 
  }

  const editTodo = (id) => {
    todos = todos.map(item =>
      item.id === id ?
      {...item, estado: !item.estado}
      : item
    )
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
  <h1 class='display-5 my-3'>CRUD</h1>
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
  </div>
</main>
