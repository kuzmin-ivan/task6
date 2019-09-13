import React, { Component } from 'react';

import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './LetterSection.module.css';
import CoveredLetter from '../covered-letter/covered-letter';
import OpenedLetter from '../opened-letter/opened-letter';
import { AppState } from '../../reducers';
import letterAnimation from '../covered-letter/transitions/LetterAnimation.module.css';

const mapStateToProps = (state: AppState) => ({
  isShownLetter: state.openCloseLetter.isShownLetter,
  letters: state.mailBox.letters
});

class LetterSection extends Component<ReturnType<typeof mapStateToProps>> {
  public render() {
    return (
      <section className={styles.lettersSection}>
        {this.props.isShownLetter ? (
          <OpenedLetter />
        ) : (
          <div>
            <TransitionGroup component={null}>
              {this.props.letters.map(l => (
                <CSSTransition timeout={500} classNames={{ ...letterAnimation }} key={`key${l.id}`}>
                  <CoveredLetter letter={l} />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        )}
      </section>
    );
  }
}

export default connect(mapStateToProps)(LetterSection);
