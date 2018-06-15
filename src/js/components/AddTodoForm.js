import React, { Component } from 'react';

export default class AddTodo extends Component {
  render() {
    const {submitTodo} = this.props
    let input

    return(
      <div>
        <form onSubmit={e => {e.preventDefault(); submitTodo(input.value)}}>
          <input ref={node => {input = node}} defaultValue="Enter task name..."/>
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}