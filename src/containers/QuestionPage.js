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
    this.state = {selectionMade: false};
  }
  handleAnswerSelection(index) {
    if (index === this.props.categories.quizApp.currentRoundAnswer) {
      this.setState({correct: true, selectionMade: true})
    } else {
      this.setState({correct: false, selectionMade: true})
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Which country is {this.props.categories.quizApp.currentRoundQuestions[this.props.categories.quizApp.currentRoundAnswer][0][0]} in?</h2>
        <h3>Select the answer from the list below:</h3>
      {this.props.categories.quizApp.currentRoundQuestions.map((item, index)=><h4 onClick={()=>this.handleAnswerSelection(index)} key={index}>{item[0][1]}</h4>)}
      {this.state.selectionMade && <button>Next Round</button>}
      </div>
    );
  }
}

export default connect(mapStateToProps)(QuestionPage);
