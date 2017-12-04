import React, { Component } from "react";
import { connect } from "react-redux";

import StartPage from "./StartPage";
import QuestionPage from "./QuestionPage";
import CompletedPage from "./CompletedPage";

function mapStateToProps(state) {
  return {
    categories: state
  };
}

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.categories.quizApp.currentRound === 0) {
           return <StartPage />
        } else if (this.props.categories.quizApp.currentRound === 10) {
           return <CompletedPage />
        } else {
           return <QuestionPage />
        }
  }
}

export default connect(mapStateToProps)(App);
