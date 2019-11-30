import React, { Component } from 'react';

export default class summaryItem extends Component {
  render() {
    return (
      <div className="summaryitem">
        { this.props.children }
      </div>
    )
  }
}
