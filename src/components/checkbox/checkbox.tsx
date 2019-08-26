import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MailBoxActionTypes } from '../../reducers/types';
import { checkAllLetters, checkLetter } from '../../actions/actions';
import styles from './Checkbox.module.css';

export const MAIN_CHECKBOX_ID = 'check-all-letters';

class Checkbox extends Component<{
  id: string;
  checked: boolean;
  dispatch: Dispatch<MailBoxActionTypes>;
}> {
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
          onChange={() => {
            if (this.props.id === MAIN_CHECKBOX_ID) {
              this.props.dispatch(checkAllLetters(this.props.checked));
            } else {
              this.props.dispatch(checkLetter(+this.props.id));
              console.log(this.props.checked);
            }
          }}
        />
        <span className={styles.checkLetterBox} />
      </label>
    );
  }
}

export default connect()(Checkbox);
