import React, { Component } from 'react';
import Link from './Link';

export default class TasksInfoBar extends Component {
  render() {
    const {getNumberOfActiveTodos, todos, setVisibilityFilter, visibilityFilter} = this.props;
    let allTasksCompleted = getNumberOfActiveTodos <= 0 ? true : false
    let allDone = (allTasksCompleted && todos.length > 0) ? 'completed-all-tasks' : ''
    let allDoneText = allTasksCompleted ? 'All tasks completed' : 'Complete all tasks'
    let mainText = todos.length <= 0 ? 'Create your first task!' : allDoneText
    return(
      <div id="tasks_info_bar" className={allDone}>
        <h3>{mainText}</h3>
        <p>You have {getNumberOfActiveTodos} active tasks</p>
        <div className="filters-container">
          <Link 
            visibilityFilter={visibilityFilter} 
            ownFilter={'SHOW_COMPLETED'} 
            setVisibilityFilter={setVisibilityFilter}
          >
            Completed
          </Link>
          <Link 
            visibilityFilter={visibilityFilter} 
            ownFilter={'SHOW_ACTIVE'} 
            setVisibilityFilter={setVisibilityFilter}
          >
            Active
          </Link>
          <Link 
            visibilityFilter={visibilityFilter} 
            ownFilter={'SHOW_ALL'} 
            setVisibilityFilter={setVisibilityFilter}
          >
            All
          </Link>
        </div>
      </div>
    )
  }
}