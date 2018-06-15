let todoId = 0

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: todoId++,
      text: text
    }
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}