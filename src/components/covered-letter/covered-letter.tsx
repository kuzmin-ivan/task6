import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styles from './CoveredLetter.module.css';
import { ILetter, LetterActionTypes, MailBoxActionTypes } from '../../reducers/types';
import { checkLetter, openLetter } from '../../actions/actions';
import Checkbox from '../checkbox/checkbox';

interface ICoveredLetter {
  letter: ILetter;
}

const mapDispatchToProps = (dispatch: Dispatch<MailBoxActionTypes | LetterActionTypes>) => ({
  checkLetter: (id: number) => dispatch(checkLetter(id)),
  openLetter: (letter: ILetter) => dispatch(openLetter(letter))
});

class CoveredLetter extends Component<ReturnType<typeof mapDispatchToProps> & ICoveredLetter> {
  public render() {
    const isReadTextClass = this.props.letter.isRead ? styles.isRead : styles.isNotRead;
    const isReadMarkClass = this.props.letter.isRead ? styles.isReadMark : styles.isReadMarkNotRead;
    return (
      <div className={`${styles.coveredLetter} `}>
        <Checkbox
          id={`${this.props.letter.id}`}
          checked={this.props.letter.checked}
          onChangeHandler={() => this.props.checkLetter(this.props.letter.id)}
        />
        <div className={styles.miniLogoWrapper}>
          <img
            className={styles.miniSenderPic}
            src={`/resources/images/${this.props.letter.senderImage}`}
            alt={this.props.letter.sender}
          />
        </div>
        <div
          className={`${styles.clickToOpenWrapper} ${isReadTextClass}`}
          onClick={() => {
            this.props.openLetter(this.props.letter);
          }}
          onKeyPress={() => {
            this.props.openLetter(this.props.letter);
          }}
          role="button"
          tabIndex={0}
        >
          <div
            className={`${styles.senderName} ${styles.letterItem} ${
              styles.mainContentDistinguished
            }`}
          >
            {this.props.letter.sender}
          </div>
          <div className={`${isReadMarkClass} ${styles.letterItem}`} />
          <div
            className={`${styles.titleText} ${styles.letterItem} ${
              styles.mainContentDistinguished
            }`}
          >
            {this.props.letter.letterTheme}
          </div>
          <div
            className={`${styles.dateInfo} ${styles.letterItem} ${styles.mainContentDistinguished}`}
          >
            {this.props.letter.date}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CoveredLetter);
