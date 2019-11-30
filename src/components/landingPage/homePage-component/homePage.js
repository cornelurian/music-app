import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage" style={{border:"1px solid red"}}>
        Test App home Page
        { this.props.children }
      </div>
    )
  }
}
