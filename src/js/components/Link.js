import React, { Component } from 'react';

export default class Link extends Component {
  render() {
    const {setVisibilityFilter, visibilityFilter, ownFilter, children} = this.props;
    let active = visibilityFilter == ownFilter ? 'active-link' : ''
    return (
      <div className={active} onClick={() => setVisibilityFilter(ownFilter)}>
        {children}
      </div>
    )
  }
}