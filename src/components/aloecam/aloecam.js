import React from 'react';
import styles from './aloecam.module.css';
import AloeInfo from '../aloeInfo/aloeInfo';
import Clicks from './clicks';
import AloeCamFeed from './aloeCamFeed';
import UserCount from './userCount';


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
   <br/>
   <h6>From everyone at the aloeCam headquarters, 
    <h6>we would like to wish you and your family
      <h6>a Happy Thanksgiving!</h6>
    </h6>
   </h6>
    <Clicks />  
    <br/>
     
    <br />
    <button className={styles.button1} onClick={hideMoreInfo}>aloeInfo</button>
  <AloeInfo/>
  <UserCount /> 
    <br/>
    <br/>

  </div> 
); 

export default Aloecam;
