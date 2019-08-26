import React, { Component } from 'react';

import styles from './BurgerMenu.module.css';

export class BurgerMenu extends Component {
  public render() {
    return (
      <div className={styles.burgerMenu}>
        <div className={styles.stripe}>
          <div className={styles.stripe}>
            <div className={styles.stripe} />
          </div>
        </div>
      </div>
    );
  }
}
