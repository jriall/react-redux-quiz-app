import React, { Component } from "react";
import { connect } from "react-redux";
import { newQuiz } from "../actions/index";
import { bindActionCreators } from "redux";

import cityImage from "../assets/images/city-illustration-2.png";

function mapStateToProps(state) {
  return {
    categories: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      newQuiz: newQuiz
    },
    dispatch
  );
}

class CompletedPage extends Component {
  constructor(props) {
    super(props);
    this.handleNewQuiz = this.handleNewQuiz.bind(this);
  }

  handleNewQuiz() {
    this.props.newQuiz();
  }

  render() {

    const score = this.props.categories.quizApp.userScore;

    return (
      <div className="completed-page">
        <h1>You Completed The Quiz</h1>
        <h2>{`You scored ${score} out of 10! ${score===0?"Ouch! That's gotta hurt!":score>0&&score<5?"You've got some studying to do!":score>=5&&score<8?"Not too bad at all!":score===8||score===9?"Excellent work!":"Wow! Are you sure you haven't been Googling the answers though?!"}`}</h2>
        <img src={cityImage} alt="city" className="cover-image"/>
        <button className="reset-button" onClick={() => this.handleNewQuiz()}>Play Again</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompletedPage);
