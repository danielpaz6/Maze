import React from 'react';
import styles from './Notification.module.css';
import PropTypes from 'prop-types';

function Notification({ show, gameOver, handleOnStartGame }) {
  return (
    show && (
      <div className={styles.root}>
        {gameOver ? <p>GAME OVER</p> : null}
        <span onClick={handleOnStartGame}>
          PRESS <kbd>Enter</kbd> OR HERE TO START
        </span>
      </div>
    )
  );
}

Notification.propTypes = {
  show: PropTypes.bool.isRequired,
  gameOver: PropTypes.bool.isRequired,
  handleOnStartGame: PropTypes.func,
};

export default Notification;
