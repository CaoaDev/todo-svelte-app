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
    <h1 class="display-5 my-3"><b><center>Lista de Tareas!!!</center></b></h1>
    <TodoAdd />
    {#each $todos as item}
      <Todo {item} />
    {/each}
  </div>
</main>

<style>
  main {
    padding: 0px;
    margin: 0px;
    height: 100%;
  }
</style>
