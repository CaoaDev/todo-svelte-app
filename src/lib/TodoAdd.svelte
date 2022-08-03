<script>
  import { todos } from "../store/stores";

  let todo = { id: {}, texto: "", estado: false };

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
      title: 'Saved',
      showConfirmButton: false,
      timer: 700
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

<style>
  input.form-control {
    background-color: #73FAC9;
    border-radius: 10px;
    color: #0054C0;
    font-weight: bolder;
    margin-top: 30px;
    margin-bottom: 35px;
    will-change: filter;
  }
  input.form-control:hover {
    filter: drop-shadow(0 0 2em #0099FA);
  }
</style>
