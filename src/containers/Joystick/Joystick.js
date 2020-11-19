import React from 'react';
// import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Joystick.module.css';
import { KEYBOARD } from '../../utils/constants';

function Joystick({ handleOnArrowKeyPressed }) {
  return (
    <div className={styles.root}>
      <div
        className={clsx(styles.button, styles.left)}
        onClick={() => handleOnArrowKeyPressed({ key: KEYBOARD.Left })}
      >
        <i className={clsx(styles.arrow, styles.leftArrow)} />
      </div>
      <div
        className={clsx(styles.button, styles.right)}
        onClick={() => handleOnArrowKeyPressed({ key: KEYBOARD.Right })}
      >
        <i className={clsx(styles.arrow, styles.rightArrow)} />
      </div>
      <div
        className={clsx(styles.button, styles.top)}
        onClick={() => handleOnArrowKeyPressed({ key: KEYBOARD.Up })}
      >
        <i className={clsx(styles.arrow, styles.upArrow)} />
      </div>
      <div
        className={clsx(styles.button, styles.bottom)}
        onClick={() => handleOnArrowKeyPressed({ key: KEYBOARD.Down })}
      >
        <i className={clsx(styles.arrow, styles.downArrow)} />
      </div>
    </div>
  );
}

export default Joystick;
