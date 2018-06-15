import AddTodoForm from '../components/AddTodoForm';

import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';

const mapDispatchToProps = (dispatch) => {
  return {
    submitTodo: (text) => {
      dispatch(addTodo(text))
    }
  }
}

let AddTodo = connect(null, mapDispatchToProps)(AddTodoForm)

export default AddTodo