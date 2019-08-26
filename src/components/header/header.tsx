import React, { Component } from 'react';

import { BurgerMenu } from '../burger-menu/burger-menu';
import yandexMailLogo from '../../resources/images/yandex-mail-logo.svg';
import { SearchForm } from '../search-form/search-form';
import styles from './Header.module.css';

export class Header extends Component {
  public render() {
    return (
      <header className={styles.header}>
        <BurgerMenu />
        <img className={styles.mailLogo} src={yandexMailLogo} alt="Лого - Яндекс Почта" />
        <SearchForm />
      </header>
    );
  }
}
