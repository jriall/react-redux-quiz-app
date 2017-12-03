import { START_QUIZ } from "./types";
import { ANSWER_QUESTION } from "./types";

export function startQuiz() {
  return {
    type: START_QUIZ,
    payload: 1,
  }
}

export function answerQuestion(data) {
  return {
    type : ANSWER_QUESTION,
    payload: data
  }
}