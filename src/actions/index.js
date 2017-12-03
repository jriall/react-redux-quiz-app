import { START_QUIZ } from "./types";

export function startQuiz() {
  return {
    type: START_QUIZ,
    payload: 1,
  }
}