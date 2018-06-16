const todos = (state = [], action) => {
  let payload = action.payload
  switch (action.type) {
    case 'ADD_TODO':
      let todo = {
        id: payload.id, 
        text: payload.text, 
        completed: payload.completed,
        editing: payload.editing
      }
      return [...state, todo]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        return todo.id == action.id ? Object.assign({}, todo, {completed: !todo.completed}) : todo
      })
    case 'EDIT_TODO':
      return state.map(todo => {
        return todo.id == action.id ? Object.assign({}, todo, {editing: true}) : todo
      })
    case 'UPDATE_TODO':
      let updatedTodo = {
        id: payload.id, 
        text: payload.text, 
        editing: payload.editing
      }
      return state.map(todo => {
        return todo.id == payload.id ? Object.assign({}, todo, updatedTodo) : todo
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