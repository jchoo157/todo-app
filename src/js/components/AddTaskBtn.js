import React, { Component } from 'react';

export default class AddTask extends Component {
  render() {
    const {addTask} = this.props;
    return (
      <div className="add-task-btn responsive-div" onClick={() => addTask()}>
        + Add Task
      </div>
    )
  }
}