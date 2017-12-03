import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    categories: state
  };
}

class CompletedPage extends Component {
  render() {
    return (
      <h1>You Completed Quiz</h1>
    );
  }
}

export default connect(mapStateToProps)(CompletedPage);
