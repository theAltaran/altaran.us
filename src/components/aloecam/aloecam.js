import React from 'react';
import styles from './aloecam.module.css';

const Aloecam = () => (
  <div className={styles.Aloecam}>
    <div>
    <h1>AloeCam</h1>
    <br/>
    <a href="http://aloecam.ddns.net:5000/motorOn">
       <input type="button" value="Dont Click This" />
    </a>
    <br/>
    <iframe title="aloecam" id="aloeCam" src="https://aloecam.ddns.net:6969" width="1920px" height="1080px"></iframe>
    </div>
  </div>
);

Aloecam.propTypes = {};

Aloecam.defaultProps = {};

export default Aloecam;
