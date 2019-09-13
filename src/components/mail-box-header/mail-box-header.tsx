import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styles from './MailBoxHeader.module.css';
import Checkbox, { MAIN_CHECKBOX_ID } from '../checkbox/checkbox';
import { AppState } from '../../reducers';
import { MailBoxActionTypes } from '../../reducers/types';
import { checkAllLetters, removeCheckedLetters } from '../../actions/actions';

const mapStateToProps = (state: AppState) => ({
  mainCheckbox: state.mailBox.checkbox,
  themeClass: state.theme.isDarkTheme ? styles.buttonDark : styles.button,
  isHeaderVisible: state.isMailBoxHeaderDisabled.isHeaderDisabled ? styles.hideHeader : ''
});

const mapDispatchToProps = (dispatch: Dispatch<MailBoxActionTypes>) => ({
  removeCheckedLetters: () => dispatch(removeCheckedLetters()),
  checkAllLetters: (checked: boolean) => dispatch(checkAllLetters(checked))
});

class MailBoxHeader extends Component<
  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> {
  public render() {
    return (
      <div className={`${styles.boxHeader} ${this.props.isHeaderVisible}`}>
        <Checkbox
          id={MAIN_CHECKBOX_ID}
          checked={this.props.mainCheckbox}
          onChangeHandler={() => this.props.checkAllLetters(this.props.mainCheckbox)}
        />
        <label htmlFor="forward" className={styles.buttonWrapper}>
          <input id="forward" type="button" className={this.props.themeClass} value="Переслать" />
        </label>
        <label htmlFor="remove" className={styles.buttonWrapper}>
          <input
            id="remove"
            type="button"
            className={this.props.themeClass}
            value="Удалить"
            onClick={this.props.removeCheckedLetters}
          />
        </label>
        <label htmlFor="spam" className={styles.buttonWrapper}>
          <input id="spam" type="button" className={this.props.themeClass} value="Это спам!" />
        </label>
        <label htmlFor="read" className={styles.buttonWrapper}>
          <input id="read" type="button" className={this.props.themeClass} value="Прочитано" />
        </label>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MailBoxHeader);
