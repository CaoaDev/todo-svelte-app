<script>
  import { todos } from "../stores";

  let todo = { id: "", texto: "", estado: false };

  const addTodo = () => {
    if(todo.texto.length < 4){
      Swal.fire({
        title: 'Error!',
        text: 'El Todo debe tener mas de 4 caracteres',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      todo.texto = ''
      return
    }
    todo.id = Date.now();
    //Store
    todos.add(todo)
    todo = { id: "", texto: "", estado: false };

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu tarea se ha guarado correctamente',
      showConfirmButton: false,
      timer: 1000
    })
  };
</script>

<form on:submit|preventDefault={addTodo}>
  <input
    type="text"
    placeholder="Nueva Tarea..."
    class="form-control shadow border-0"
    bind:value={todo.texto}
  />
</form>
