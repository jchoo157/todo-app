import React, { Component } from 'react';
import Todo from '../components/Todo';
import AddTaskBtn from '../components/AddTaskBtn';

export default class TodoList extends Component {
  displayTodos() {
    const {todos, toggleTodo, deleteTodo, editTodo, updateTodo, submitTodo} = this.props;

    return todos.map(todo => {
      return (
        <Todo 
          key={todo.id} 
          todo={todo} 
          toggleTodo={() => {toggleTodo(todo.id)}} 
          deleteTodo={() => {deleteTodo(todo.id)}} 
          editTodo={() => {editTodo(todo.id)}} 
          updateTodo={updateTodo}
          submitTodo={submitTodo} 
        />
      )
    })
  }

  render() {
    const {addTask} = this.props;
    return (
      <div id="todo_list">
        {this.displayTodos()}
        <AddTaskBtn addTask={addTask} />
      </div>
    )
  }
}