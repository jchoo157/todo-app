let todoId = 0

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: todoId++,
      text: text,
      editing: false
    }
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}

export const editTodo = (id) => {
  return {
    type: 'EDIT_TODO',
    id: id
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id: id
  }
}