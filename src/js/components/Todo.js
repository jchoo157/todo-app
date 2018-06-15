import React, { Component } from 'react';
import AddTodoForm from './AddTodoForm';

export default class Todo extends Component {
  displayEditingTodo() {
    const {todo, updateTodo, submitTodo} = this.props;
    return (
      <div>
        <AddTodoForm updateTodo={updateTodo} todo={todo} submitTodo={submitTodo}/>
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
      completedClass = 'completed-todo'
      completedText = 'Completed'
      todoStatus = 'Active'
    }
    return (
      <div>
        <div className="overlay">
          <div onClick={toggleTodo} className={completedClass}>{completedText}</div>
          {/*<div onClick={deleteTodo} className="delete-todo">DELETE</div>*/}
          <div onClick={editTodo} className="edit-todo">Edit</div>
        </div>
        <h3>{todo.text}</h3>
        <p>{todoStatus}</p>
      </div>
    )
  }

  hoverTodo() {
    return (
      <div className="overlay">
        <div className="complete">Complete</div>
        <div className="edit">Edit</div>
      </div>
    )
  }

  render() {
    const {todo, toggleTodo, deleteTodo, editTodo, updateTodo, submitTodo} = this.props;

    return(
      <div className="todo">
        {todo.editing ? this.displayEditingTodo() : this.displayTodo()}
      </div>
    )
  }
}