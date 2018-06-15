import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    const {todo, toggleTodo, deleteTodo} = this.props;
    return(
      <div className="todo" onClick={toggleTodo}>
        <h3>{todo.text}</h3>
        <h3>{todo.completed ? 'completed' : 'active'}</h3>
        <button onClick={deleteTodo} className="delete-todo">DELETE</button>
      </div>
    )
  }
}