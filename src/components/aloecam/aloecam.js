import React from 'react';
import styles from './aloecam.module.css';
import Rules from '../../components/rules/rules';
import Clicks from './clicks';
import AloeCamFeed from './aloeCamFeed'


function hideMoreInfo() {
  var x = document.getElementById("infoHide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const Aloecam = () => (
  <div className={styles.Aloecam}>
   <AloeCamFeed />
    <Clicks />
    <br/>
    <button className={styles.button1} onClick={hideMoreInfo}>aloeInfo</button>
  <Rules/>
    <br/>
    <br/>

  </div> 
); 

export default Aloecam;
