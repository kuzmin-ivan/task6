import { CHANGE_THEME, IThemeState, ThemeActionTypes } from './types';

const initialState: IThemeState = {
  isDarkTheme: false
};

export function themeReducer(state = initialState, action: ThemeActionTypes): IThemeState {
  if (action.type === CHANGE_THEME) {
    return {
      isDarkTheme: !state.isDarkTheme
    };
  }
  return state;
}
