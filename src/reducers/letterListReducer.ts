import {
  CHECK_ALL_LETTERS,
  CHECK_LETTER,
  IMailBoxState,
  MailBoxActionTypes,
  OPEN_LETTER,
  RECEIVE_LETTER,
  REMOVE_CHECKED_LETTERS
} from './types';

const initialState: IMailBoxState = {
  letters: [],
  checkbox: false
};

export function letterListReducer(state = initialState, action: MailBoxActionTypes): IMailBoxState {
  switch (action.type) {
    case RECEIVE_LETTER:
      return {
        letters: [action.payload, ...state.letters],
        checkbox: false
      };
    case CHECK_ALL_LETTERS:
      return {
        letters: state.letters.map(letter => ({ ...letter, checked: action.checked })),
        checkbox: action.checked
      };
    case CHECK_LETTER:
      return {
        letters: state.letters.map(letter =>
          letter.id === action.id ? { ...letter, checked: !letter.checked } : letter
        ),
        checkbox: false
      };
    case REMOVE_CHECKED_LETTERS:
      return {
        letters: state.letters.filter(letter => !letter.checked),
        checkbox: false
      };
    case OPEN_LETTER:
      return {
        letters: state.letters.map(letter =>
          letter.id === action.displayLetter.id ? { ...letter, isRead: true } : letter
        ),
        checkbox: state.checkbox
      };
    default:
      return state;
  }
}
