import { combineReducers } from 'redux';
import { letterListReducer } from './letterListReducer';
import { letterReducer } from './letterReducer';

const mailAppReducer = combineReducers({
  mailBox: letterListReducer,
  openCloseLetter: letterReducer
});

export type AppState = ReturnType<typeof mailAppReducer>;

export default mailAppReducer;
