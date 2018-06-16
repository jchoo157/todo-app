import React, { Component } from 'react';

export default class TasksInfoBar extends Component {
  render() {
    const {getNumberOfActiveTodos, todos} = this.props;
    return(
      <div id="tasks_info_bar">
        <h3>Complete all tasks</h3>
        <p>You have {getNumberOfActiveTodos} active tasks</p>
      </div>
    )
  }
}