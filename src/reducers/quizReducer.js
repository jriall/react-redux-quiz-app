import testData from "../assets/testdata";
import { START_QUIZ } from "../actions/types";

function quizReducer(state = testData, action) {
  switch (action.type) {
    case START_QUIZ:
      const newState = { ...state };
      newState.currentRound = 1;
      return newState;
    default:
      return state;
  }
}

export default quizReducer;
