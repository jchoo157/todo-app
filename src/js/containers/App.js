import VisibleTodoList from './VisibleTodoList';
import TasksInfoBar from '../components/TasksInfoBar';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/index';

let store = createStore(rootReducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Your tasks</h1>
          <TasksInfoBar />
          <VisibleTodoList />
        </div>
      </Provider>
    )
  }
}