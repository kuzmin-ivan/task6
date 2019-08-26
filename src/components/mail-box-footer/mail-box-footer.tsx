import React, { Component } from 'react';
import styles from './MailBoxFooter.module.css';
import stylesMailBox from '../mail-box/MailBox.module.css';

export class MailBoxFooter extends Component {
  public render() {
    return (
      <footer className={styles.footer}>
        <div className={stylesMailBox.hrLine} />
        <div className={styles.footerInfo}>
          <a href="https://yandex.ru/support/mail/" className={styles.footerLink}>
            Помощь и обратная связь
          </a>
          <a href="https://yandex.ru/adv/" className={styles.footerLink}>
            Реклама
          </a>
          <div className={styles.footerItem}>© 2001-2019,</div>
          <a href="https://yandex.ru/" className={styles.footerLink}>
            Яндекс
          </a>
        </div>
      </footer>
    );
  }
}
