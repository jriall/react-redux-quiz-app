import { START_QUIZ } from "./types";
import { NEW_ROUND } from "./types";
import { ANSWER_QUESTION } from "./types";
import database from "../store/database";

export function loadData() {
  return dispatch => {
    dispatch(getInviteRequestedAction());
    return database.ref('/').once('value', snap => {
      const invite = snap.val();
      dispatch(getInviteFulfilledAction(invite))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getInviteRejectedAction());
    });
  }
}

export function startQuiz(data) {
  return {
    type: START_QUIZ,
    payload: data,
  }
}

export function newRound(data) {
  return {
    type : NEW_ROUND,
    payload: data
  }
}

export function answerQuestion(data) {
  return {
    type : ANSWER_QUESTION,
    payload: data
  }
}