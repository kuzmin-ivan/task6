import React, { Component } from 'react';

import { connect } from 'react-redux';
import styles from './LetterSection.module.css';
import CoveredLetter from '../covered-letter/covered-letter';
import OpenedLetter from '../opened-letter/opened-letter';
import { AppState } from '../../reducers';
import stylesMailBox from '../mail-box/MailBox.module.css';

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
            {this.props.letters.map(l => (
              <div key={`key${l.id}`}>
                <CoveredLetter letter={l} />
                <div className={stylesMailBox.hrLine} />
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default connect(mapStateToProps)(LetterSection);

