import {
  CHANGE_THEME,
  CHECK_ALL_LETTERS,
  CHECK_LETTER,
  CLOSE_LETTER,
  ILetter,
  OPEN_LETTER,
  RECEIVE_LETTER,
  REMOVE_CHECKED_LETTERS
} from '../reducers/types';
import { generateRandomLetter } from './letter-creation';

export const receiveLetter = () => ({
  type: RECEIVE_LETTER as 'RECEIVE_LETTER',
  payload: generateRandomLetter()
});

export const openLetter = (displayLetter: ILetter) => ({
  type: OPEN_LETTER as 'OPEN_LETTER',
  isShownLetter: true,
  displayLetter
});

export const closeLetter = (displayLetter: ILetter) => ({
  type: CLOSE_LETTER as 'CLOSE_LETTER',
  isShownLetter: false,
  displayLetter
});

export const checkAllLetters = (checked: boolean) => ({
  type: CHECK_ALL_LETTERS as 'CHECK_ALL_LETTERS',
  checked: !checked
});

export const checkLetter = (id: number) => ({
  type: CHECK_LETTER as 'CHECK_LETTER',
  id
});

export const removeCheckedLetters = () => ({
  type: REMOVE_CHECKED_LETTERS as 'REMOVE_CHECKED_LETTERS'
});

export const changeTheme = () => ({
  type: CHANGE_THEME as 'CHANGE_THEME'
});
