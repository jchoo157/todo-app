import TodoList from '../components/Todolist';

import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo, updateTodo, addTodo } from '../actions/todos';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  editTodo: (id) => dispatch(editTodo(id)),
  updateTodo: (id, text) => dispatch(updateTodo(id, text)),
  submitTodo: (text) => dispatch(addTodo(text)),
  addTask: (text, editing=true) => dispatch(addTodo(text, editing))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)


