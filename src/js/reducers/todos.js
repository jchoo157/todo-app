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
    default:
      return state
  }
}

export default todos