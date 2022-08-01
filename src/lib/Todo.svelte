<script>
  import { todos } from "../stores.js";

  export let item;

  const delTodo = (id) => {
    todos.delete(id)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu tarea se ha eliminado',
        showConfirmButton: false,
timer: 1000
      })
    };

  const editTodo = (id) => {
    todos.put(id)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu tarea se ha editado',
      showConfirmButton: false,
      timer: 1000
    })
  };

  const classIcono = (valor) => valor ? "bi bi-arrow-clockwise" : "bi bi-check2";
  const classEstado = (valor) => valor ? "btn-outline-success" : "btn-outline-warning";
</script>

<div class="shadow my-3 p-3 lead">
  <p on:click={editTodo(item.id)} class={item.estado ? "text-decoration-line-through" : ""}>
    <b>{item.texto}</b>
  </p>

  <button
    class="btn btn-sm {classEstado(item.estado)}"
    on:click={editTodo(item.id)}
  >
    <i class={classIcono(item.estado)} />
  </button>

  <button class="btn btn-sm btn-outline-danger" on:click={delTodo(item.id)}>
    <i class="bi bi-trash" />
  </button>
</div>

<style>
  div.shadow {
    background-color: #FFE8FF;
    border-radius: 10px;
    will-change: filter;
  }
  p {
    background-color: #F2ECFF;
    border-radius: 6px;
    color: #068488;
    font-weight: bolder;
  }
  div.shadow:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa); 
  }
</style>
