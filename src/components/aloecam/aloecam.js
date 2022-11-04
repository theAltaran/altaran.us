import React from 'react';
import RandomButton from '../randomButton/randomButton';
import styles from './aloecam.module.css';

const Aloecam = () => (
  <div className={styles.Aloecam}>
    <div>
    <h1>AloeCam</h1>
    <hr/>
    <br/>
  <iframe title="aloecam" src="https://aloecam.ddns.net:6969" width="1284px" height="725px"></iframe>
  <br/>
       <RandomButton/>
    </div>
  </div>
);

export default Aloecam;
