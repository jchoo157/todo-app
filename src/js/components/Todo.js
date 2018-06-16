import React, { Component } from 'react';
import AddTodoForm from './AddTodoForm';

export default class Todo extends Component {
  displayEditingTodo() {
    const {todo, updateTodo, submitTodo, deleteTodo} = this.props;
    return (
      <AddTodoForm 
        updateTodo={updateTodo} 
        todo={todo} 
        submitTodo={submitTodo} 
        deleteTodo={deleteTodo}
      />
    )
  }

  displayTodo() {
    const {todo, toggleTodo, deleteTodo, editTodo} = this.props;

    let todoClass, text, todoStatus, sprite
    if (todo.completed) {
      todoClass = 'undo-todo'
      text = 'Undo'
      todoStatus = 'Completed'
      sprite = 'sprite-undo'
    } else {
      todoClass = 'complete-todo'
      text = 'Complete'
      todoStatus = 'Active'
      sprite = 'sprite-completed'
    }
    return (
      <div className="todo-content">
        <div className="overlay">
          <div onClick={toggleTodo} className={todoClass}>{text}</div>
          <div className="todo-options">
            <div onClick={editTodo} className="edit-todo">Edit</div>
            <div onClick={deleteTodo} className="delete-todo">Delete</div>
          </div>
        </div>
        <div onClick={deleteTodo} className="delete-todo mobile">
          <div className="sprite sprite-delete"/>
        </div>
        <div className="mobile-todo-options">
          <div onClick={toggleTodo} className={todoClass}><div className={"sprite " + sprite}/></div>
          <div onClick={editTodo} className="edit-todo"><div className="sprite sprite-edit"/></div>
        </div>
        <div className="vertical-align">
          <h3>{todo.text}</h3>
          <p className={todoClass}>{todoStatus}</p>
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