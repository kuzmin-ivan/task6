import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Checkbox.module.css';
import { AppState } from '../../reducers';

export const MAIN_CHECKBOX_ID = 'check-all-letters';

const mapStateToProps = (state: AppState) => ({
  themeClass: state.theme.isDarkTheme ? styles.dark : ''
});

interface ICheckBoxProps {
  id: string;
  checked: boolean;
  themeClass: string;
  onChangeHandler: () => void;
}

class Checkbox extends Component<ICheckBoxProps> {
  public render() {
    return (
      <label
        htmlFor={this.props.id}
        className={`${styles.checkboxWrapper} ${styles.checkboxFlex} ${styles.checkLetter}`}
      >
        <input
          id={this.props.id}
          className={styles.checkLetterVisuallyHidden}
          type="checkbox"
          checked={this.props.checked}
          onChange={this.props.onChangeHandler}
        />
        <span className={`${styles.checkLetterBox} ${this.props.themeClass}`} />
      </label>
    );
  }
}

export default connect(mapStateToProps)(Checkbox);
