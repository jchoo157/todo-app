import AddTodo from './AddTodo';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/index';

let store = createStore(rootReducer)

export default class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <AddTodo />
      </Provider>
    )
  }
}