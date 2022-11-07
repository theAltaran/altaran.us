import React from 'react';
import RandomButton from '../randomButton/randomButton';
import styles from './aloecam.module.css';
// import IframeResizer from 'iframe-resizer-react';


const Aloecam = () => (
  <div className={styles.Aloecam}>
    <br/>
   <h1>Welcome to the home of the aloeCam</h1>
   <img className={styles.img1} src="https://aloecam.ddns.net:6969"alt='aloeCam'></img>
    <br/>
    <br/>
       <RandomButton/>
       {/* <div className={styles.rules}> */}
       {/* </div> */}
  </div> 
);

export default Aloecam;
