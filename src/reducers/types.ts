export interface ILetter {
  isRead: boolean;
  visible: boolean;
  showing: boolean;
  removing: boolean;
  checked: boolean;
  letterTheme: string;
  text: string;
  sender: string;
  senderImage: string;
  date: string;
  id: number;
}

export interface IMailBoxState {
  letters: ILetter[];
  checkbox: boolean;
}

export const RECEIVE_LETTER = 'RECEIVE_LETTER';
export const CHECK_ALL_LETTERS = 'CHECK_ALL_LETTERS';
export const CHECK_LETTER = 'CHECK_LETTER';
export const REMOVE_CHECKED_LETTERS = 'REMOVE_CHECKED_LETTERS';

interface IReceiveLetterAction {
  type: typeof RECEIVE_LETTER;
  payload: ILetter;
}

interface ICheckAllLettersAction {
  type: typeof CHECK_ALL_LETTERS;
  checked: boolean;
}

interface ICheckLetterAction {
  type: typeof CHECK_LETTER;
  id: number;
}

interface IRemoveCheckedLettersAction {
  type: typeof REMOVE_CHECKED_LETTERS;
}

export type MailBoxActionTypes =
  | IReceiveLetterAction
  | ICheckAllLettersAction
  | ICheckLetterAction
  | IRemoveCheckedLettersAction
  | LetterActionTypes;

export interface ILetterOpenCloseState {
  displayLetter?: ILetter;
  isShownLetter: boolean;
}

export const OPEN_LETTER = 'OPEN_LETTER';
export const CLOSE_LETTER = 'CLOSE_LETTER';

interface IOpenLetterAction {
  type: typeof OPEN_LETTER;
  displayLetter: ILetter;
  isShownLetter: boolean;
}

interface ICloseLetterAction {
  type: typeof CLOSE_LETTER;
  displayLetter: ILetter;
  isShownLetter: boolean;
}

export type LetterActionTypes = IOpenLetterAction | ICloseLetterAction;

export interface IThemeState {
  isDarkTheme: boolean;
}

export const CHANGE_THEME = 'CHANGE_THEME';

interface IChangeThemeAction {
  type: typeof CHANGE_THEME;
}

export type ThemeActionTypes = IChangeThemeAction;

export interface IMailBoxHeaderState {
  isHeaderDisabled: boolean;
}
