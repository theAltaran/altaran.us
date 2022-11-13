import React from 'react';
import RandomButton from '../randomButton/randomButton';
import styles from './aloecam.module.css';
import Rules from '../../components/rules/rules';
import Clicks from './clicks';
// import LastClick from './lastClick';
import AloeCamFeed from './aloeCamFeed'


const Aloecam = () => (
  <div className={styles.Aloecam}>
   <AloeCamFeed />
   <Clicks />
   <RandomButton/>
      <br/>
    <br/>
  <Rules/>
    <br/>
    <br/>

  </div> 
);

export default Aloecam;
