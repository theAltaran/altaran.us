import React from 'react';
import styles from './aloecam.module.css';

function startMotor() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText); //To check output while error[Optional]
    }
  };
  xhttp.open("GET", "https://aloecam.ddns.net:5000/motorOn", true);
  xhttp.send();
}

const Aloecam = () => (
  <div className={styles.Aloecam}>
    <div>
    <h1>AloeCam</h1>
    <hr/>
    <br/>
    <div className='cam1'>
  <iframe title="aloecam" src="https://aloecam.ddns.net:6969" width="1284px" height="725px"></iframe>
  <br/>
       <input className='button1' type="button" onClick={startMotor} value="Dont Click This" />
    </div>
    </div>
  </div>
);

Aloecam.propTypes = {};

Aloecam.defaultProps = {};

export default Aloecam;
