import React, { Component } from 'react';

import { connect } from 'react-redux';
import styles from './BurgerMenu.module.css';
import { AppState } from '../../reducers';

const mapStateToProps = (state: AppState) => ({
  themeClass: state.theme.isDarkTheme ? styles.dark : ''
});

class BurgerMenu extends Component<{ themeClass: string }> {
  public render() {
    return (
      <div className={styles.burgerMenu}>
        <div className={`${styles.stripe} ${this.props.themeClass}`}>
          <div className={`${styles.stripe} ${this.props.themeClass}`}>
            <div className={`${styles.stripe} ${this.props.themeClass}`} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(BurgerMenu);
