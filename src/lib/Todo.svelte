<script>
  import { todos } from '../stores'; 

  export let item;

  const delTodo = (id) => {
    todos.delete(id)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Delete',
        showConfirmButton: false,
        timer: 700
      })
    };

  const editText = (id) => {
    todos.update(item.texto)
    const { value: text } = Swal.fire({
      input: 'textarea',
      inputLabel: 'Message',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })

    if (text) {
      Swal.fire(text)
    }
  }

  const editTodo = (id) => {
    todos.put(id)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Edit',
      showConfirmButton: false,
      timer: 700
    })
  };

  const classIcono = (valor) => valor ? "bi bi-arrow-clockwise" : "bi bi-check2";
  const classEstado = (valor) => valor ? "btn-outline-success" : "btn-outline-warning";
</script>

<div class="shadow my-3 p-3 lead">
  <p on:click={editText(item.texto)} class='p-editext' >
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
    background-color: #009AB8;
    border-radius: 10px;
    will-change: filter;
  }
  p {
    background-color: #F2ECFF;
    border-radius: 6px;
    color: #2AA63D;
    user-select: none;
    font-weight: normal;
  }
  div.shadow:hover {
    filter: drop-shadow(0 0 2em #23E32A); 
  }
</style>
