import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    const {todo, toggleTodo, deleteTodo, editTodo, updateTodo} = this.props;
    return(
      <div className="todo">
        <h3>{todo.text}</h3>
        <h3 onClick={toggleTodo}>{todo.completed ? 'completed' : 'active'}</h3>
        <button onClick={deleteTodo} className="delete-todo">DELETE</button>
        {
          todo.editing ? 
          <button onClick={updateTodo} className="update-todo">SEND</button> :
          <button onClick={editTodo} className="edit-todo">EDIT</button>
        }
      </div>
    )
  }
}