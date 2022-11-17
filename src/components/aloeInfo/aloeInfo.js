import React from 'react';
import styles from './aloeInfo.module.css';
// import Clicks from './topTen';


const AloeInfo = () => (
  // <div><button className={styles.button1} onClick={hideMoreInfo}></button>
  // </div>
  <div id="infoHide" className={styles.Rules}>
    <hr/>
    Top Clickers* and Their Last Click
  {/* <Clicks /> */}

    <hr/>
    Rules of the aloeCam
    <br/>
    <br/>
    1. Lights are on from 8AM EST to 10PM EST / 1PM to 3:00AM UTC
    <br/>
    <br/>
    2. Marble Motor is on from 10AM EST to 10PM EST / 3PM to 3:00AM UTC
    <br/>
    <br/>
    3. Can't have marbles dropping while Fiona and I sleep now can I?
    <br/>
    <br/>
    *tracking via IP for Now.  Will have more options in the future.
    <hr/>
  </div>
);



export default AloeInfo;
