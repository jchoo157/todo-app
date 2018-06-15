import React, { Component } from 'react';
import Todo from '../components/Todo';

export default class TodoList extends Component {
  displayTodos() {
    const {todos, toggleTodo, deleteTodo, editTodo, updateTodo} = this.props;

    return todos.map(todo => {
      return (
        <Todo 
          key={todo.id} 
          todo={todo} 
          toggleTodo={() => {toggleTodo(todo.id)}} 
          deleteTodo={() => {deleteTodo(todo.id)}} 
          editTodo={() => {editTodo(todo.id)}} 
          updateTodo={() => {updateTodo(todo.id)}} 
        />
      )
    })
  }

  render() {
    return (
      <div>
        {this.displayTodos()}
      </div>
    )
  }
}