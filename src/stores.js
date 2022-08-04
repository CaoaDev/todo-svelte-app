import { writable } from 'svelte/store'

export let editText

const createTodos = () => {
  const { subscribe, set, update } = writable([])

  return {
    subscribe,
    local: todos => { set(todos) },

    add: todo => { update(todos => todos = [...todos, todo]) },

    editText: todo => { update(todos => todos = todos.map((item) => item.texto === todo))},

    delete: id => { update(todos => todos = todos.filter((item) => item.id !== id)) },

    put: id => { update(todos => todos = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          estado: !item.estado,
        };
      } else {
        return item;
      }
    }))
  }
}
}

export const todos = createTodos()
