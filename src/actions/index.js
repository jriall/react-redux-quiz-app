
import { START_QUIZ } from "./types";
import { NEW_ROUND } from "./types";
import { ANSWER_QUESTION } from "./types";
import { NEW_QUIZ } from "./types";
import { FETCH_REQUEST } from "./types";
import { FETCH_SUCCESS } from "./types";
import { FETCH_ERROR } from "./types";

export function startQuiz(data) {
  return {
    type: START_QUIZ,
    payload: data
  };
}

export function newRound(data) {
  return {
    type: NEW_ROUND,
    payload: data
  };
}

export function answerQuestion(data) {
  return {
    type: ANSWER_QUESTION,
    payload: data
  };
}

export function newQuiz(data) {
  return {
    type: NEW_QUIZ,
    payload: data
  };
}

function fetchDataRequest(){
  return {
    type: FETCH_REQUEST
  }
}

function fetchDataSuccess(payload) {
  return {
    type: FETCH_SUCCESS,
    payload
  }
}

function fetchDataError() {
  return {
    type: FETCH_ERROR
  }
}

export function fetchDataWithRedux() {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    return fetchData().then(([response, json]) =>{
      if(response.status === 200){
        dispatch(fetchDataSuccess(json))
      }
      else{
        dispatch(fetchDataError())
      }
    })
  }
}

function fetchData() {
  const URL = "https://quiz-app-bae2b.firebaseio.com/data.json";
  return fetch(URL, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}

//https://quiz-app-bae2b.firebaseio.com/data.json