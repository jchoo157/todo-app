const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let todo = {
        id: action.id, 
        text: action.text, 
        status: action.status
      }
      return [...state, todo]
    default:
      return state
  }
}

export default todos