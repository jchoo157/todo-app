import TasksInfoBar from '../components/TasksInfoBar';

import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/visibilityFilter';

const getActiveTodos = (todos) => {
  return todos.filter(todo => {
    return !todo.completed
  })
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  getNumberOfActiveTodos: getActiveTodos(state.todos).length,
  visibilityFilter: state.visibilityFilter,
})

const mapDispatchToProps = (dispatch) => ({
  setVisibilityFilter: (filter) => {
    dispatch(setVisibilityFilter(filter))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksInfoBar)