import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    categories: state
  };
}

class QuestionPage extends Component {
  render() {
    return (
      <div>
        <h2>Which country is {this.props.categories.quizApp.unusedQuestions[0][0]} in?</h2>
        <h3>Select the answer from the list below:</h3>
      {this.props.categories.quizApp.unusedQuestions.map(item=><h4>{item[1]}</h4>)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(QuestionPage);
