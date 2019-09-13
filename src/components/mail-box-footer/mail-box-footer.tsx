import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './MailBoxFooter.module.css';
import { AppState } from '../../reducers';

const mapStateToProps = (state: AppState) => ({
  themeClass: state.theme.isDarkTheme ? styles.footerLinkDark : styles.footerLink
});

class MailBoxFooter extends Component<{ themeClass: string }> {
  public render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerInfo}>
          <a href="https://yandex.ru/support/mail/" className={this.props.themeClass}>
            Помощь и обратная связь
          </a>
          <a href="https://yandex.ru/adv/" className={this.props.themeClass}>
            Реклама
          </a>
          <div className={styles.footerItem}>© 2001-2019,</div>
          <a href="https://yandex.ru/" className={this.props.themeClass}>
            Яндекс
          </a>
        </div>
      </footer>
    );
  }
}

export default connect(mapStateToProps)(MailBoxFooter);
