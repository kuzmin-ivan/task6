import React, { Component } from 'react';

import styles from './MailBox.module.css';

import MailBoxHeader from '../mail-box-header/mail-box-header';
import { MailBoxFooter } from '../mail-box-footer/mail-box-footer';
import LetterSection from '../letter-section/letter-section';


export class MailBox extends Component {
  public render() {
    return (
      <div className={styles.mailBox}>
        <MailBoxHeader />

        <div className={styles.hrLine} />
        <div className={styles.lettersSectionWrapper}>

          <LetterSection />
        </div>
        <MailBoxFooter />
      </div>
    );
  }
}
