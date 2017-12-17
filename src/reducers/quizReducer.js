import defaults from "../assets/defaults";
import { START_QUIZ, NEW_ROUND, ANSWER_QUESTION, NEW_QUIZ, FETCH_REQUEST, FETCH_SUCCESS } from "../actions/types";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function quizReducer(state = defaults, action) {
  switch (action.type) {
    case START_QUIZ:
      let newQuiz = Object.assign({}, state);
      for (let i = 0; i < 4; i++) {
        let randomNumber = getRandomNumber(
          0,
          newQuiz.unusedQuestions.length - 1
        );
        let question = newQuiz.unusedQuestions.splice(randomNumber, 1);
        newQuiz.currentRoundQuestions.push(question);
      }
      if (action.payload === "countries") {
        newQuiz.questionsAndAnswersReversed = true;
      } else {
        newQuiz.questionsAndAnswersReversed = false;
      }
      newQuiz.currentRoundAnswer = getRandomNumber(0, 3);
      newQuiz.currentRound++;
      return newQuiz;
    case ANSWER_QUESTION:
      let answeredQuestion = Object.assign({}, state);
      if (action.payload) answeredQuestion.userScore++;
      return answeredQuestion;
    case NEW_ROUND:
      let newRound = Object.assign({}, state);
      newRound.currentRoundQuestions = [];
      newRound.currentRoundAnswer = -1;
      for (let i = 0; i < 4; i++) {
        let randomNumber = getRandomNumber(
          0,
          newRound.unusedQuestions.length - 1
        );
        let question = newRound.unusedQuestions.splice(randomNumber, 1);
        newRound.currentRoundQuestions.push(question);
      }
      newRound.currentRoundAnswer = getRandomNumber(0, 3);
      newRound.currentRound++;
      if (action.payload) newRound.userScore++;
      return newRound;
    case NEW_QUIZ:
      let newQuizData = Object.assign({}, state);
      newQuizData.currentRoundQuestions = [];
      newQuizData.currentRoundAnswer = -1;
      newQuizData.currentRound = 0;
      newQuizData.userScore = 0;
      return newQuizData;
    case FETCH_REQUEST:
      return state;
    case FETCH_SUCCESS:
      let newFetch = Object.assign({}, state);
      newFetch = action.payload;
      newFetch.currentRoundQuestions = [];
      return newFetch;
    default:
      return state;
  }
}

export default quizReducer;
