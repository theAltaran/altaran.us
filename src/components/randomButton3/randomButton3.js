import React from 'react';
import styles from './randomButton3.module.css';
import startMotor3 from '../aloecam/startmotor3';

const RandomButton3 = () => (
  <div className={styles.RandomButton}>
      <button className={styles.button1} onClick={startMotor3}>
        3 MARBLES
        </button>
  </div>
);

export default RandomButton3;
