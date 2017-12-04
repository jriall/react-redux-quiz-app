import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    categories: state
  };
}

class CompletedPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.categories.quizApp.userScore)
    return (
      <div className="completed-page">
        <h1>You Completed The Quiz</h1>
        <h2>You scored {this.props.categories.quizApp.userScore} out of 10!</h2>
        <button>Play Again</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CompletedPage);
