import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styles from './NavMenu.module.css';
import { MailBoxActionTypes } from '../../reducers/types';
import { receiveLetter } from '../../actions/actions';

class NavMenu extends Component<{ dispatch: Dispatch<MailBoxActionTypes> }> {
  public render() {
    return (
      <nav className={styles.navMenu}>
        <button className={styles.actionButton} type="button">
          Написать
        </button>
        <button
          className={`${styles.actionButton} ${styles.actionButtonIndent}`}
          type="button"
          onClick={() => {
            this.props.dispatch(receiveLetter());
          }}
        >
          Получить письмо
        </button>
        <ul className={styles.menuListTabs}>
          <li className={`${styles.menuListTabsTab} ${styles.menuListTabsIncomingTab}`}>
            Входящие
          </li>

          <li className={styles.menuListTabsTab}>Отправленные</li>
          <li className={styles.menuListTabsTab}>Удалённые</li>
          <li className={styles.menuListTabsTab}>Спам</li>
          <li className={styles.menuListTabsTab}>Черновики</li>
          <li className={styles.menuListTabsTab}>Создать папку</li>
        </ul>
      </nav>
    );
  }
}

export default connect()(NavMenu);
