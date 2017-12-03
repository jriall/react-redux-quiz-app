import testData from "../assets/testdata";
import { START_QUIZ, ANSWER_QUESTION } from "../actions/types";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function quizReducer(state = testData, action) {
  switch (action.type) {
    case START_QUIZ:
      let newQuiz = Object.assign({}, state);
      for (let i=0; i<4; i++) {
        let randomNumber = getRandomNumber(0, newQuiz.unusedQuestions.length-1);
        let question = newQuiz.unusedQuestions.splice(randomNumber, 1);
        newQuiz.currentRoundQuestions.push(question);
      };
      newQuiz.currentRoundAnswer = getRandomNumber(0, 3);
      newQuiz.currentRound++;
      return newQuiz;
    // case ANSWER_QUESTION:
    default:
      return state;
  }
}

export default quizReducer;
