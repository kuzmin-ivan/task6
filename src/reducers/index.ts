import { combineReducers } from 'redux';
import { letterListReducer } from './letterListReducer';
import { letterReducer } from './letterReducer';
import { themeReducer } from './themeReducer';

const mailAppReducer = combineReducers({
  mailBox: letterListReducer,
  openCloseLetter: letterReducer,
  theme: themeReducer
});

export type AppState = ReturnType<typeof mailAppReducer>;

export default mailAppReducer;
