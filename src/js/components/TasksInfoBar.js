import React, { Component } from 'react';

export default class TasksInfoBar extends Component {
  render() {
    return(
      <div id="tasks_info_bar">
        <h3>Complete all tasks</h3>
        <p>X active tasks</p>
      </div>
    )
  }
}