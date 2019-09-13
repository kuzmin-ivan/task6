import React, { Component } from 'react';

import { connect } from 'react-redux';
import styles from './MailBox.module.css';

import MailBoxHeader from '../mail-box-header/mail-box-header';
import MailBoxFooter from '../mail-box-footer/mail-box-footer';
import LetterSection from '../letter-section/letter-section';
import { AppState } from '../../reducers';

const mapStateToProps = (state: AppState) => ({
  themeClass: state.theme.isDarkTheme ? styles.dark : ''
});

class MailBox extends Component<{ themeClass: string }> {
  public render() {
    return (
      <div className={`${styles.mailBox} ${this.props.themeClass}`}>
        <MailBoxHeader />
        <div className={styles.lettersSectionWrapper}>
          <LetterSection />
        </div>
        <MailBoxFooter />
      </div>
    );
  }
}

export default connect(mapStateToProps)(MailBox);
