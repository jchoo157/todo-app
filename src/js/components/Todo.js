import React, { Component } from 'react';
import AddTodoForm from './AddTodoForm';

export default class Todo extends Component {
  displayEditingTodo() {
    const {todo, updateTodo, submitTodo, deleteTodo} = this.props;
    return (
      <div>
        <AddTodoForm 
          updateTodo={updateTodo} 
          todo={todo} 
          submitTodo={submitTodo} 
          deleteTodo={deleteTodo}
        />
      </div>
    )
  }

  displayTodo() {
    const {todo, toggleTodo, deleteTodo, editTodo} = this.props;

    let completedClass, completedText, todoStatus
    if (todo.completed) {
      completedClass = 'undo-todo'
      completedText = 'Undo'
      todoStatus = 'Completed'
    } else {
      completedClass = 'complete-todo'
      completedText = 'Complete'
      todoStatus = 'Active'
    }
    return (
      <div>
        <div className="overlay hide-smaller-screens">
          <div onClick={toggleTodo} className={completedClass}>{completedText}</div>
          <div className="todo-options">
            <div onClick={editTodo} className="edit-todo">Edit</div>
            <div onClick={deleteTodo} className="delete-todo">Delete</div>
          </div>
        </div>
        <div className="vertical-align">
          <h3>{todo.text}</h3>
          <p className={completedClass}>{todoStatus}</p>
        </div>
      </div>
    )
  }

  render() {
    const {todo} = this.props;

    return(
      <div className="todo responsive-div">
        {todo.editing ? this.displayEditingTodo() : this.displayTodo()}
      </div>
    )
  }
}