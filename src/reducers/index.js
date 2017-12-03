import { combineReducers } from 'redux';
import quizReducer from './quizReducer';

const rootReducer = combineReducers({
  quizApp: quizReducer,
});

export default rootReducer;
