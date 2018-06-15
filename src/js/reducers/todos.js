const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let payload = action.payload
      let todo = {
        id: payload.id, 
        text: payload.text, 
        completed: payload.completed
      }
      return [...state, todo]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id == action.id) {
          return Object.assign({}, todo, {completed: !todo.completed})
        } else {
          return todo
        }
      })
    case 'DELETE_TODO':
      let copyState = [...state]
      return copyState.filter(todo => {
        return todo.id != action.id
      })
    default:
      return state
  }
}

export default todos