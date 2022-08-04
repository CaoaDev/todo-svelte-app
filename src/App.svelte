<script>
  import { todos } from "./stores"; 
  import TodoAdd from "./lib/TodoAdd.svelte";
  import Todo from './lib/Todo.svelte';

  if (localStorage.getItem("todos")) {
    todos.local(JSON.parse(localStorage.getItem("todos")))
  }

  $: localStorage.setItem("todos", JSON.stringify($todos));
</script>

<main>
  <div class="container">
    <h1 class="display-5 my-3">
      Lista de Tareas!!! "{$todos.length}"
    </h1>
    <hr />
    <TodoAdd />
    {#each $todos as item}
      <Todo {item} />
    {/each}
  </div>
</main>

<style>
  h1.display-5 {
    color: #E9DE7A;
    font-weight: bold;
    text-align: center;
    user-select: none;
  }
  h1.display-5:hover {
    filter: drop-shadow(0 0 1em gold); 
  }
  hr {
    color: gold; 
  }
  main {
    height: 97.5vh;
    padding: 0px;
    margin: 0px;
  }
</style>
