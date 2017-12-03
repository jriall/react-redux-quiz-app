import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    categories: state
  };
}

class QuestionPage extends Component {
  constructor(props) {
    super(props);
    this.handleAnswerSelection = this.handleAnswerSelection.bind(this);
    this.state = { selectionMade: false };
  }
  handleAnswerSelection(index) {
    this.setState({ selectionMade: true, answerIndex: index });
  }

  render() {
    return (
      <div>
        <h2>Current Score: {this.props.categories.quizApp.userScore}/10</h2>
        <h2>
          Which country is{" "}
          {
            this.props.categories.quizApp.currentRoundQuestions[
              this.props.categories.quizApp.currentRoundAnswer
            ][0][0]
          }{" "}
          in?
        </h2>
        <h3>Select the answer from the list below:</h3>
        {this.props.categories.quizApp.currentRoundQuestions.map(
          (item, index) => (
            <h4
              onClick={() => this.handleAnswerSelection(index)}
              key={index}
              className={
                this.state.selectionMade &&
                index === this.state.answerIndex && index === this.props.categories.quizApp.currentRoundAnswer ? "green-bg" : this.state.selectionMade && index === this.state.answerIndex && index !== this.props.categories.quizApp.currentRoundAnswer ? "red-bg" : ""
              }
            >
              {item[0][1]}
            </h4>
          )
        )}
        {this.state.selectionMade && this.props.categories.quizApp.currentRoundAnswer === this.state.answerIndex && <h3>That's Correct!</h3>}
        {this.state.selectionMade && this.props.categories.quizApp.currentRoundAnswer !== this.state.answerIndex && <h3>Incorrect! The correct answer was {this.props.categories.quizApp.currentRoundQuestions[
              this.props.categories.quizApp.currentRoundAnswer
            ][0][1]}</h3>}
        {this.state.selectionMade && <button>Next Round</button>}
      </div>
    );
  }
}

export default connect(mapStateToProps)(QuestionPage);
