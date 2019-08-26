import React, { Component } from 'react';
import styles from './MailBoxHeader.module.css';

export class MailBoxHeader extends Component {
  public render() {
    return (
      <div className={styles.boxHeader}>
        <label className={`${styles.boxHeaderCheckAllLettersWrapper} ${styles.checkLetter}`}>
          <input
            id="check-all-letters"
            className={`${styles.boxHeader} ${styles.checkLetterVisuallyHidden}`}
            type="checkbox"
          />
          <span className={styles.checkLetterBox} />
        </label>
        <label className={styles.boxHeaderButtonWrapper}>
          <input type="button" className={styles.boxHeaderButton} value="Переслать" />
        </label>
        <label className={styles.boxHeaderButtonWrapper}>
          <input type="button" className={styles.boxHeaderButton} value="Удалить" />
        </label>
        <label className={styles.boxHeaderButtonWrapper}>
          <input type="button" className={styles.boxHeaderButton} value="Это спам!" />
        </label>
        <label className={styles.boxHeaderButtonWrapper}>
          <input type="button" className={styles.boxHeaderButton} value="Прочитано" />
        </label>
      </div>
    );
  }
}
