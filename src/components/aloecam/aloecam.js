import React from 'react';
import styles from './aloecam.module.css';
import AloeInfo from '../aloeInfo/aloeInfo';
import Clicks from './clicks';
import AloeCamFeed from './aloeCamFeed';
import UserCount from './userCount';
import { Helmet } from "react-helmet";

import ReactGA from 'react-ga4';
const TRACKING_ID = "G-R2V8MCVCGE"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


// function hideMoreInfo() {
//   var x = document.getElementById("infoHide");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
const pageTitle = "altaran.us";
const pageDescription = "Home of the one and only aloeCam.";

const Aloecam = () => (
  <div className={styles.Aloecam}>
          <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
   <AloeCamFeed />
   <br/>
    <Clicks /> 
    <UserCount /> 
    <br/>
    {/* <button className={styles.button1} onClick={hideMoreInfo}>aloeInfo</button> */}
  <AloeInfo/>
   
    <br/>
    <br/>

  </div> 
); 

export default Aloecam;
