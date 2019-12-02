import React, { Component } from "react";
import { connect } from "react-redux";

class HomePage extends Component {
  constructor(props) {
    debugger;
    super(props);
  }

  render() {
    const { songs } = this.props;

    debugger;
    return (
      <div className="homepage" style={{ border: "1px solid red" }}>
        Test App home Page
        <p>---------------</p>
        {songs.length}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    songs: state.songs
  };
}

const mapDispatchToProps = dispatch => ({
  //simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
