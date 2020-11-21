import React from 'react';
import styles from './Header.module.css';
import PropTypes from 'prop-types';

import muteIcon from '../../assets/images/mute.svg';
import unmuteIcon from '../../assets/images/unmute.svg';

function Header({ hiScore, time, points, round, handleToggleMute, mute }) {
  const formatTime = () => {
    return time || time === 0 ? time.toString().padStart(2, ' ') : null;
  };

  const rightSideText = (
    <span>
      Hi-Score <span className={styles.score}>{hiScore.toString().padStart(5, ' ')}</span>
    </span>
  );

  return (
    <header>
      <div className={styles.row}>
        <p>Welcome to the StorrSoft maze!</p>
        <p>{rightSideText}</p>
      </div>
      <div className={styles.stats}>
        <p>
          1UP <span className={styles.score}>{points.toString().padStart(5, ' ')}</span>&nbsp;&nbsp;
          ROUND <span className={styles.score}>{round.toString().padStart(3, ' ')}</span>
          &nbsp;&nbsp; TIME <span className={styles.score}>{formatTime()}</span>&nbsp;&nbsp;
        </p>
        <p className={styles.responsiveScore}>{rightSideText}</p>
        {mute ? (
          <button
            className={styles.muteButton}
            title="Click here to unmute music"
            onClick={handleToggleMute}
          >
            <img src={unmuteIcon} alt="unmute" />
          </button>
        ) : (
          <button
            className={styles.muteButton}
            title="Click here to mute music"
            onClick={handleToggleMute}
          >
            <img src={muteIcon} alt="unmute" />
          </button>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  time: PropTypes.number,
  hiScore: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  round: PropTypes.number.isRequired,
  handdleToggleMute: PropTypes.func,
  mute: PropTypes.bool,
};

export default Header;
