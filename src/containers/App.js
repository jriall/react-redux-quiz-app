import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDataWithRedux } from "../actions/index";
import { bindActionCreators } from "redux";

import StartPage from "./StartPage";
import QuestionPage from "./QuestionPage";
import CompletedPage from "./CompletedPage";

function mapStateToProps(state) {
  return {
    categories: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchDataWithRedux: fetchDataWithRedux
    },
    dispatch
  );
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.categories.quizApp.currentRound === -1) {
      this.props.fetchDataWithRedux();
    }
  }
  render() {
    if (this.props.categories.quizApp.currentRound === 0) {
      return <StartPage />;
    } else if (this.props.categories.quizApp.currentRound === 11) {
      return <CompletedPage />;
    } else if (this.props.categories.quizApp.currentRound > 0 && this.props.categories.quizApp.currentRound < 11){
      return <QuestionPage />;
    } else {
      return <p>Loading...</p>
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
