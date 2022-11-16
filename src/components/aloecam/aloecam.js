import React from 'react';
import RandomButton from '../randomButton/randomButton';
import styles from './aloecam.module.css';
import Rules from '../../components/rules/rules';
import Clicks from './clicks';
// import LastClick from './lastClick';
import AloeCamFeed from './aloeCamFeed'
// import hideMoreInfo from '../rules/rules'

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
   <RandomButton />
    <br/>
    <button className={styles.button1} onClick={hideMoreInfo}>aloeInfo</button>
  <Rules/>
    <br/>
    <br/>

  </div> 
); 

export default Aloecam;
