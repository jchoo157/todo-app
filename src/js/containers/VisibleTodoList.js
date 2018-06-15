import TodoList from '../components/Todolist';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo, updateTodo } from '../actions/todos';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.filter)
})

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    editTodo: (id) => dispatch(editTodo(id)),
    updateTodo: (id) => dispatch(updateTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)


