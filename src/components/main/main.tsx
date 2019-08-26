import React, { Component } from 'react';

import styles from './Main.module.css';
import NavMenu from '../nav-menu/nav-menu';
import { MailBox } from '../mail-box/mail-box';

export class Main extends Component {
  public render() {
    return (
      <main className={styles.mainContentTopIndent}>
        <NavMenu />
        <MailBox />
      </main>
    );
  }
}
