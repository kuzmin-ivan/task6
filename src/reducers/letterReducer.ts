import { CLOSE_LETTER, ILetterOpenCloseState, LetterActionTypes, OPEN_LETTER } from './types';

const initialState: ILetterOpenCloseState = {
  displayLetter: undefined,
  isShownLetter: false
};

export function letterReducer(
  state = initialState,
  action: LetterActionTypes
): ILetterOpenCloseState {
  switch (action.type) {
    case OPEN_LETTER:
      return {
        displayLetter: action.displayLetter,
        isShownLetter: action.isShownLetter
      };
    case CLOSE_LETTER:
      return {
        displayLetter: action.displayLetter,
        isShownLetter: action.isShownLetter
      };
    default:
      return state;
  }
}
