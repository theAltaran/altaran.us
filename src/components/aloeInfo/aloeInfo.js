import React from 'react';
import styles from './aloeInfo.module.css';
import TopTenList from './topTenList';

const AloeInfo = () => (
  <div>
  <div id="infoHide" className={styles.Rules}>
    
    <hr/>
    <p className={styles.RulesHeading}>Rules of the aloeCam</p>
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
    
    <div className={styles.TopTen}>
    <p className={styles.TopTenHeading}>Top 10 Clickers* and Their Last Click</p>
    <br/>
    <TopTenList />
    <hr/>
  </div>
  </div>
  </div>
);



export default AloeInfo;
