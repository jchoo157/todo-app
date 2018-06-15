const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let todo = {
        id: action.id, 
        text: action.text, 
        completed: action.completed
      }
      return [...state, todo]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id == action.id) {
          {...todo, completed: !todo.completed}
        }
      })
    case 'DELETE_TODO':
      let copyState = [...state]
      return copyState.filter(todo => {
        return todo.id != action.id
      })
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default todos