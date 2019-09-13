import React, { Component } from 'react';

import Header from '../header/header';
import styles from './App.module.css';
import { Main } from '../main/main';

export class App extends Component {
  public render() {
    return (
      <div className={styles.mailBody}>
        <Header />
        <Main />
      </div>
    );
  }
}
