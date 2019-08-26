import React, { Component } from 'react';

import styles from './SearchForm.module.css';

export class SearchForm extends Component {
  public render() {
    return (
      <form className={styles.mailSearch}>
        <input className={styles.input} type="text" placeholder="Поиск" />
        <div className={styles.clear}>×</div>
      </form>
    );
  }
}
