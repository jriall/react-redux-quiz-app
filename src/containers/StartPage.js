import React, { Component } from "react";
import { connect } from "react-redux";
import { startQuiz, loadData } from "../actions/index";
import { bindActionCreators } from "redux";

import cityImage from "../assets/images/city-illustration.png";

function mapStateToProps(state) {
  return {
    categories: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      startQuiz: startQuiz,
      loadData: loadData
    },
    dispatch
  );
}

class StartPage extends Component {
  constructor(props) {
    super(props);
    this.handleStartQuiz = this.handleStartQuiz.bind(this);
  }

  componentDidMount() {
    this.props.loadData();
  }

  handleStartQuiz(type) {
    this.props.startQuiz(type);
  }

  render() {
    return (
      <div>
        <h1>Capital Cities Quiz</h1>
        <h2>
          Test your knowledge of capital cities with this interactive quiz!
        </h2>
        <img src={cityImage} alt="city" className="cover-image" />
        <button
          onClick={() => this.handleStartQuiz("countries")}
          className="start-button"
        >
          GUESS THE CITIES!
        </button>
        <button
          onClick={() => this.handleStartQuiz("cities")}
          className="start-button"
        >
          GUESS THE COUNTRIES!
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
