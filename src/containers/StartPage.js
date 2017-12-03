import React, { Component } from "react";
import { connect } from "react-redux";
import { startQuiz } from "../actions/index";
import { bindActionCreators } from "redux";

function mapStateToProps(state) {
  return {
    categories: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      startQuiz: startQuiz
    },
    dispatch
  );
}

class StartPage extends Component {
  constructor(props) {
    super(props);
    this.handleStartQuiz = this.handleStartQuiz.bind(this);
  }

  handleStartQuiz() {
    this.props.startQuiz();
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Capital Cities Quiz</h1>
        <h2>
          Test your knowledge of capital cities with this interactive quiz!
        </h2>
        <button onClick={this.handleStartQuiz}>START QUIZ</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
