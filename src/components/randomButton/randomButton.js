import React from 'react';
import styles from './randomButton.module.css';
import startMotor1 from '../aloecam/startmotor1';

const RandomButton = () => (
  <div className={styles.RandomButton}>
      <button className={styles.button1} onClick={startMotor1}>
        Drop 1 Marble at a Time
        </button>
  </div>
);

export default RandomButton;
