import React, { Component } from 'react';

export default class AddTodo extends Component {
  render() {
    const {todo, submitTodo, updateTodo, deleteTodo} = this.props
    let submitMethod = todo.editing ? updateTodo : submitTodo
    return(
      <div className="todo-form vertical-align">
        <form className={todo.text ? 'pad-top-bot' : ''} onSubmit={e => {e.preventDefault(); submitMethod(todo.id, this.input.value)}}>
          <input ref={node => {this.input = node}} className="task-input" placeholder="Enter task name..." defaultValue={todo.text}/>
          <div className="edit-options">
            <button className="task-save-btn" type="submit">Save</button>
            {!todo.text ? <div className="cancel-todo" onClick={deleteTodo}>Cancel</div> : null}
          </div>
        </form>
      </div>
    )
  }
}