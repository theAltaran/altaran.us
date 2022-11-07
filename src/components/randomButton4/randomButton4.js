import React from 'react';
import styles from './randomButton4.module.css';
import startMotor5 from '../aloecam/startmotor5';

const RandomButton4 = () => (
  <div className={styles.RandomButton}>
      <button className={styles.button1} onClick={startMotor5}>
        5 MARBLES
        </button>
  </div>
);

export default RandomButton4;
