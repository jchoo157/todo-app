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

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id: id
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
  }
}