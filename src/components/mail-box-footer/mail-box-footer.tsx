import React, { Component } from 'react';
import styles from './MailBoxFooter.module.css';
import stylesMailBox from '../mail-box/MailBox.module.css';

export class MailBoxFooter extends Component {
  public render() {
    return (
      <footer className={styles.letterSectionFooter}>
        <div className={stylesMailBox.mailBoxHrLine} />
        <div className={styles.letterSectionFooterInfo}>
          <a href="#" className={styles.letterSectionFooterLink}>
            Помощь и обратная связь
          </a>
          <a href="#" className={styles.letterSectionFooterLink}>
            Реклама
          </a>
          <div className={styles.letterSectionFooterItem}>© 2001-2019,</div>
          <div className={styles.letterSectionFooterLink}>Яндекс</div>
        </div>
      </footer>
    );
  }
}
