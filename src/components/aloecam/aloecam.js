import React from 'react';
import styles from './aloecam.module.css';
import startMotor1 from './startmotor1'

const Aloecam = () => (
  <div className={styles.Aloecam}>
    <div>
    <h1>AloeCam</h1>
    <hr/>
    <br/>
    <div className='cam1'>
  <iframe title="aloecam" src="https://aloecam.ddns.net:6969" width="1284px" height="725px"></iframe>
  <br/>
       <input className='button1' type="button" onClick={startMotor1} value="Dont Click This!" />
    </div>
    </div>
  </div>
);

export default Aloecam;
