import React from 'react';
import styles from './randomButton.module.css';
import startMotor1 from '../aloecam/startmotor1';

const RandomButton = () => (
  <div className={styles.RandomButton}>
      <button id='button1' onClick={startMotor1}>
        Please Click Me Good
        </button>
  </div>
);

export default RandomButton;
