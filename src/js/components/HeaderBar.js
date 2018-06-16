import React, { Component } from 'react';

export default class HeaderBar extends Component {
  render() {
    return(
      <div id="header_bar">
        <h3 className="vertical-align">SimpleTask</h3>
        <h5 className="vertical-align">Hello, user!</h5>
      </div>
    )
  }
}