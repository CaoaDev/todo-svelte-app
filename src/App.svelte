<script>
  import { todos } from './stores'

  import TodoAdd from "./lib/TodoAdd.svelte";
  import Todo from './lib/Todo.svelte';

  if (localStorage.getItem("todos")) {
    todos.local(JSON.parse(localStorage.getItem("todos")))
  }

  $: localStorage.setItem("todos", JSON.stringify($todos));
</script>

<main>
  <div class="container">
    <h1 class="display-5 my-3">Lista de Tareas!!!</h1>
    <TodoAdd />
    {#each $todos as item}
      <Todo {item} />
    {/each}
  </div>
</main>
