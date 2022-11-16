import React from 'react';
import styles from './randomButton.module.css';
// import clickity1 from './clickity';
import apple from './apple.png';
import startMotor1 from '../aloecam/startmotor1';


const RandomButton = () => (
  <div className={styles.RandomButton}>
      <button className={styles.apple} onClick={startMotor1}>
      <img src={apple} alt="Logo" className={styles.apple2} />
        </button>
        <br/>
        <br/>
  </div>
);

export default RandomButton;

