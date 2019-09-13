import React, { Component } from 'react';

import { connect } from 'react-redux';
import BurgerMenu from '../burger-menu/burger-menu';
import yandexMailLogo from '../../resources/images/yandex-mail-logo.svg';
import { SearchForm } from '../search-form/search-form';

import styles from './Header.module.css';
import Switch from '../switch-button/switch-button';
import { AppState } from '../../reducers';

const mapStateToProps = (state: AppState) => ({
  themeClass: state.theme.isDarkTheme ? styles.dark : ''
});

class Header extends Component<{ themeClass: string }> {
  public render() {
    return (
      <header className={styles.header}>
        <BurgerMenu />
        <img
          className={`${styles.mailLogo} ${this.props.themeClass}`}
          src={yandexMailLogo}
          alt="Лого - Яндекс Почта"
        />
        <SearchForm />
        <Switch />
      </header>
    );
  }
}

export default connect(mapStateToProps)(Header);
