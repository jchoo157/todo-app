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

export default connect(null, mapDispatchToProps)(AddTodoForm)