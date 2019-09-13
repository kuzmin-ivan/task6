import { CLOSE_LETTER, IMailBoxHeaderState, LetterActionTypes, OPEN_LETTER } from './types';

const initialState: IMailBoxHeaderState = {
  isHeaderDisabled: false
};

export function disableMailBoxHeaderReducer(
  state = initialState,
  action: LetterActionTypes
): IMailBoxHeaderState {
  switch (action.type) {
    case OPEN_LETTER:
      return {
        isHeaderDisabled: action.isShownLetter
      };
    case CLOSE_LETTER:
      return {
        isHeaderDisabled: action.isShownLetter
      };
    default:
      return state;
  }
}
