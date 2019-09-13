import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styles from './SwitchButton.module.css';
import { AppState } from '../../reducers';
import { ThemeActionTypes } from '../../reducers/types';
import { changeTheme } from '../../actions/actions';

const mapStateToProps = (state: AppState) => ({
  isDarkTheme: state.theme.isDarkTheme
});

const mapDispatchToProps = (dispatch: Dispatch<ThemeActionTypes>) => ({
  changeTheme: () => dispatch(changeTheme())
});

class Switch extends Component<
  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> {
  public constructor(
    props: ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
  ) {
    super(props);
    this.changeBodyColor = this.changeBodyColor.bind(this);
  }

  public changeBodyColor() {
    if (this.props.isDarkTheme) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  }

  public render() {
    const checkedCheckboxClass = this.props.isDarkTheme
      ? styles.reactSwitchCheckboxChecked
      : styles.reactSwitchCheckbox;
    const checkedButtonClass = this.props.isDarkTheme
      ? styles.reactSwitchButtonChecked
      : styles.reactSwitchButton;
    const checkedLabelClass = this.props.isDarkTheme
      ? styles.reactSwitchLabelChecked
      : styles.reactSwitchLabel;
    return (
      <div
        className={styles.reactSwitchPosition}
        onClick={() => {
          this.props.changeTheme();
          this.changeBodyColor();
        }}
        onKeyPress={() => {
          this.props.changeTheme();
          this.changeBodyColor();
        }}
        role="button"
        tabIndex={0}
      >
        <div className={checkedCheckboxClass} id="react-switch-new" />
        <div className={checkedLabelClass}>
          <span className={checkedButtonClass} />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switch);
