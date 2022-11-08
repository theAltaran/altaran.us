import React from 'react';
import styles from './randomButton.module.css';
import clickity1 from './clickity';

const RandomButton = () => (
  <div className={styles.RandomButton}>
      <button className={styles.button1} onClick={clickity1}>
        Drop It Like Its Hot
        </button>
  </div>
);

export default RandomButton;

