import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    const {todo, toggleTodo} = this.props;
    return(
      <div className="todo" onClick={toggleTodo}>
        <h1>{todo.text}</h1>
        <h3>{todo.completed ? 'completed' : 'active'}</h3>
      </div>
    )
  }
}