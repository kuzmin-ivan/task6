import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styles from './OpenedLetter.module.css';
import stylesDistinguished from '../covered-letter/CoveredLetter.module.css';
import { ILetter, LetterActionTypes } from '../../reducers/types';
import { closeLetter } from '../../actions/actions';
import { AppState } from '../../reducers';

const mapStateToProps = (state: AppState) => ({
  displayLetter: state.openCloseLetter.displayLetter
});

const mapDispatchToProps = (dispatch: Dispatch<LetterActionTypes>) => ({
  closeLetter: (letter: ILetter) => dispatch(closeLetter(letter))
});

class OpenedLetter extends Component<
  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> {
  public render() {
    return (
      <div className={styles.openedLetter}>
        <div
          className={styles.closer}
          onClick={() =>
            this.props.displayLetter
              ? this.props.closeLetter(this.props.displayLetter)
              : 'Error: trying to render undefined letter'
          }
          onKeyPress={() =>
            this.props.displayLetter
              ? this.props.closeLetter(this.props.displayLetter)
              : 'Error: trying to render undefined letter'
          }
          role="button"
          tabIndex={0}
        >
          ×
        </div>
        <div
          className={`${styles.content} 
        ${stylesDistinguished.mainContentDistinguished}`}
        >
          {this.props.displayLetter
            ? this.props.displayLetter.letterTheme
            : 'Error: trying to render undefined letter'}
          <br />
          <br />
          {this.props.displayLetter
            ? this.props.displayLetter.text
            : 'Error: trying to render undefined letter'}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenedLetter);
