import React, { Component } from 'react';

import styles from './NavMenu.module.css';

export class NavMenu extends Component {
  public render() {
    return (
      <nav className={styles.navMenu}>
        <button className={styles.navMenuActionButton} type="button">
          Написать
        </button>
        <button
          className={`${styles.navMenuActionButton} ${styles.navMenuActionButtonIndent}`}
          type="button"
          // onClick={this.getNewLetter}
        >
          Получить письмо
        </button>
        <ul className={styles.menuListTabs}>
          <li className={`${styles.menuListTabsTab} ${styles.menuListTabsIncomingTab}`}>Входящие</li>
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
