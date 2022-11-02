import React from 'react';
import styles from './aloecam.module.css';

const Aloecam = () => (
  <div className={styles.Aloecam}>
    <div>
    <h1>AloeCam</h1>
    <hr/>
    <br/>
  <iframe title="aloecam" id="aloeCam" src="https://aloecam.ddns.net:6969" width="1280px" height="720px"></iframe>
    <a href="http://aloecam.ddns.net:5000/motorOn">
      <br/>
       <input className='button1' type="button" onClick="return false;" value="Dont Click This" />
    </a>
    </div>
  </div>
);

Aloecam.propTypes = {};

Aloecam.defaultProps = {};

export default Aloecam;
