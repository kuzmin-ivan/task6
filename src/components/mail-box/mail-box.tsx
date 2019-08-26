import React, { Component } from 'react';

import styles from './MailBox.module.css';
import { MailBoxHeader } from '../mail-box-header';
import { MailBoxFooter } from '../mail-box-footer';
import { LetterSection } from '../letter-section';

export class MailBox extends Component {
  public render() {
    return (
      <div className={styles.mailBox}>
        <MailBoxHeader />
        <div className={styles.mailBoxHrLine} />
        <div className={styles.mailBoxLettersSectionWrapper}>
          <LetterSection />
        </div>
        <MailBoxFooter />
      </div>
    );
  }
}
