import React from 'react';
import styles from './randomButton.module.css';
import clickity1 from './clickity';
import apple from './apple.png';

const RandomButton = () => (
  <div className={styles.RandomButton}>
      <button className={styles.apple} onClick={clickity1}>
      <img src={apple} alt="Logo" className={styles.apple2} />
        </button>
        <br/>
        <br/>
  </div>
);

export default RandomButton;

