import React, { Component } from 'react';

export default class AddTodo extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: ''
    }
  }

  updateInputValue(e) {
    this.setState({inputValue: e.target.value})
  }

  render() {
    const {todo, submitTodo, updateTodo} = this.props
    let submitMethod = todo.editing ? updateTodo : submitTodo
    let input
    return(
      <div className="todo-form">
        <form onSubmit={e => {e.preventDefault(); submitMethod(todo.id, this.state.inputValue)}}>
          <input className="task-input" onChange={e => {this.updateInputValue(e)}} placeholder="Enter task name..." defaultValue={todo.text}/>
          <button className="task-save-btn" type="submit">Save</button>
        </form>
      </div>
    )
  }
}