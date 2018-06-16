import TasksInfoBar from '../components/TasksInfoBar';

import { connect } from 'react-redux';

const getActiveTodos = (todos) => {
  console.log(todos)
  return todos.map(todo => {
    return !todos.completed
  })    
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  getNumberOfActiveTodos: getActiveTodos(state.todos).length
})

export default connect(mapStateToProps, null)(TasksInfoBar)