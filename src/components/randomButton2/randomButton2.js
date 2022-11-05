import React from 'react';
import styles from './randomButton2.module.css';
import startMotor1 from '../aloecam/startmotor1';

const RandomButton = () => (
  <div className={styles.RandomButton}>
      <button className={styles.button1} onClick={startMotor1}>
        Random Button
        </button>
  </div>
);

export default RandomButton;
