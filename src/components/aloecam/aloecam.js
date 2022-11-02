import React from 'react';
import styles from './aloecam.module.css';

const Aloecam = () => (
  <div className="aloecam">
    <div>
    <h1>AloeCam</h1>
    <br/>
    <a href="http://aloecam.ddns.net:5000/motorOn">
       <input type="button" value="Visit Page" />
    </a>
    <br/>
    <iframe title="aloecam" id="aloeCam" src="https://aloecam.ddns.net:6969" ></iframe>
    </div>
  </div>
);

Aloecam.propTypes = {};

Aloecam.defaultProps = {};

export default Aloecam;
