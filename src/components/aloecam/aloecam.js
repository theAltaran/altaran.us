import React from 'react';
import RandomButton from '../randomButton/randomButton';
import styles from './aloecam.module.css';
import IframeResizer from 'iframe-resizer-react';


const Aloecam = () => (
  <div className={styles.Aloecam}>
    <div> 
    <br/>
   <IframeResizer className={styles.iframe1} title="aloecam" src="https://aloecam.ddns.net:6969"></IframeResizer>
    <br/>
       <RandomButton/>
    </div>
  </div>
);

export default Aloecam;
