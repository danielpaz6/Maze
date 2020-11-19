import React from 'react';
import styles from './Header.module.css';
import PropTypes from 'prop-types';

function Header({ hiScore, time, points, round }) {
  const formatTime = () => {
    return time || time === 0 ? time.toString().padStart(2, ' ') : null;
  };

  return (
    <header>
      <div className={styles.row}>
        <p>Welcome to the StorrSoft maze!</p>
        <p>
          Hi-Score <span className={styles.score}>{hiScore.toString().padStart(5, ' ')}</span>
        </p>
      </div>
      <div className={styles.stats}>
        <p>
          1UP <span className={styles.score}>{points.toString().padStart(5, ' ')}</span>&nbsp;&nbsp;
          ROUND <span className={styles.score}>{round.toString().padStart(3, ' ')}</span>&nbsp;&nbsp;
          TIME <span className={styles.score}>{formatTime()}</span>&nbsp;&nbsp;
        </p>
        <p className={styles.responsiveScore}>
          Hi-Score <span className={styles.score}>{hiScore.toString().padStart(5, ' ')}</span>
        </p>
      </div>
    </header>
  );
}

Header.propTypes = {
  time: PropTypes.number,
  hiScore: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  round: PropTypes.number.isRequired,
};

export default Header;
