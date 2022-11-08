import React from 'react';
import styles from './randomButton.module.css';
import startMotor1 from '../aloecam/startmotor1';

function Sound1(url) {
  new Audio(url).play();
}
function clickity() {
  startMotor1();
  Sound1('doh.mp3');
}

const RandomButton = () => (
  <div className={styles.RandomButton}>
      <button className={styles.button1} onClick={clickity}>
        Drop It Like Its Hot
        </button>
  </div>
);

export default RandomButton;

