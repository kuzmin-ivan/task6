import { combineReducers } from 'redux';
import { letterListReducer } from './letterListReducer';
import { letterReducer } from './letterReducer';
import { themeReducer } from './themeReducer';
import { disableMailBoxHeaderReducer } from './disableMailBoxHeader';

const mailAppReducer = combineReducers({
  mailBox: letterListReducer,
  openCloseLetter: letterReducer,
  theme: themeReducer,
  isMailBoxHeaderDisabled: disableMailBoxHeaderReducer
});

export type AppState = ReturnType<typeof mailAppReducer>;

export default mailAppReducer;
