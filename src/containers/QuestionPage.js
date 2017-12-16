import React, { Component } from "react";
import { connect } from "react-redux";
import { newRound, answerQuestion } from "../actions/index";
import { bindActionCreators } from "redux";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

function mapStateToProps(state) {
  return {
    categories: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      newRound: newRound,
      answerQuestion: answerQuestion
    },
    dispatch
  );
}

class QuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = { selectionMade: false, coords: {} };

    this.handleAnswerSelection = this.handleAnswerSelection.bind(this);
    this.handleNextRound = this.handleNextRound.bind(this);
  }

  handleAnswerSelection(index) {
    if (this.state.selectionMade) return;
    let newState = Object.assign({}, this.state);
    newState["selectionMade"] = true;
    newState["answerIndex"] = index;
    newState.coords.lat = this.props.categories.quizApp.currentRoundQuestions[
      this.props.categories.quizApp.currentRoundAnswer
    ][0][2];
    newState.coords.lng = this.props.categories.quizApp.currentRoundQuestions[
      this.props.categories.quizApp.currentRoundAnswer
    ][0][3];
    this.setState(newState);
    let answer;
    index === this.props.categories.quizApp.currentRoundAnswer
      ? (answer = true)
      : (answer = false);
    this.props.answerQuestion(answer);
  }

  handleNextRound() {
    this.props.newRound();
    this.setState({ selectionMade: false, answerIndex: -1, coords: {} });
  }

  render() {
    console.log(this.props.categories.quizApp.questionsAndAnswersReversed)
    const MapWithAMarker = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultZoom={3}
          defaultCenter={this.state.coords}
          defaultMapTypeId="terrain"
        >
          <Marker position={this.state.coords} />
        </GoogleMap>
      ))
    );

    return (
      <div>
        <h2>Current Score: {this.props.categories.quizApp.userScore}/10</h2>
        <h2>Round {this.props.categories.quizApp.currentRound}</h2>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${(this.props.categories.quizApp.currentRound*10)-10}%` }}/>
        </div>
        <h2>{!this.props.categories.quizApp.questionsAndAnswersReversed?`
          Which country is
          ${
            this.props.categories.quizApp.currentRoundQuestions[
              this.props.categories.quizApp.currentRoundAnswer
            ][0][1]
          }
          the capital of?`:`What is the capital city of ${this.props.categories.quizApp.currentRoundQuestions[
              this.props.categories.quizApp.currentRoundAnswer
            ][0][0]}?`}
        </h2>
        <h3>Select the answer from the list below:</h3>
        {this.props.categories.quizApp.currentRoundQuestions.map(
          (item, index) => (
            <h4
              onClick={() => this.handleAnswerSelection(index)}
              key={index}
              className={
                this.state.selectionMade &&
                index === this.props.categories.quizApp.currentRoundAnswer
                  ? "green-bg"
                  : this.state.selectionMade &&
                    index === this.state.answerIndex &&
                    index !== this.props.categories.quizApp.currentRoundAnswer
                    ? "red-bg"
                    : this.state.selectionMade &&
                      index !== this.state.answerIndex
                      ? "no-hover"
                      : ""
              }
            >
              {this.props.categories.quizApp.questionsAndAnswersReversed?`${item[0][1]}`:`${item[0][0]}`}
            </h4>
          )
        )}
        {this.state.selectionMade &&
          this.props.categories.quizApp.currentRoundAnswer ===
            this.state.answerIndex && <h3>That's Correct!</h3>}
        {this.state.selectionMade &&
          this.props.categories.quizApp.currentRoundAnswer !==
            this.state.answerIndex && (
              <h3>
                {`Incorrect! The correct answer was ${this.props.categories.quizApp.questionsAndAnswersReversed?this.props.categories.quizApp.currentRoundQuestions[
                  this.props.categories.quizApp.currentRoundAnswer
                ][0][1]:this.props.categories.quizApp.currentRoundQuestions[
                  this.props.categories.quizApp.currentRoundAnswer
                ][0][0]}`}
              </h3>
          )}
        {this.state.selectionMade && (
          <div className="answer-selected-div">
            <button
              onClick={this.handleNextRound}
              className="next-round-button"
            >
              {this.props.categories.quizApp.currentRound===10?"Get Your Final Score!":"Next Round"}
            </button>
            <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpMNeYmU0cjRMAcOgeKvTy547npsj4Tj0&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `70%`, margin: `0 auto` }} />}
              containerElement={
                <div style={{ height: `400px`, width: `80%`, margin: `0 auto` }} />
              }
              mapElement={
                <div
                  style={{ height: `100%` }}
                  className="google-map-container"
                />
              }
            />
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);
