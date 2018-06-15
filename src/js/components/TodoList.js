import React, { Component } from 'react';
import Todo from '../components/Todo';

export default class TodoList extends Component {
  displayTodos(todos) {
    return todos.map(todo => {
      return (
        <Todo 
          key={todo.id} 
          todo={todo} 
          toggleTodo={() => {toggleTodo(todo.id)}} 
        />
      )
    })
  }

  render() {
    const {todos, toggleTodo} = this.props;
    return (
      <div>
        {this.displayTodos(todos, toggleTodo)}
      </div>
    )
  }
}