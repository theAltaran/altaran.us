import React from 'react';
import styles from './alt.module.css';
import IframeResizer from 'iframe-resizer-react';

function hideNES() {
  var x = document.getElementById("nesHide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hideGoogle() {
  var x = document.getElementById("googleHide");
  if (x.style.display === "none") {
    x.style.display = "block"; 
  } else {
    x.style.display = "none";
  }

}

const Alt = () => (
  <div className={styles.Alt}> 
  <h5>All about me.....</h5>   
    <u1 className={styles.list1}>things Ive put time into... </u1>
    <li className={styles.listItems}>tons of google
    <button className={styles.button1} onClick={hideGoogle}>Open/Close</button></li>
  <div id="googleHide" className={styles.google}>
  <IframeResizer  className={styles.iframe1} src="https://elgoog.im/google-mirror/"></IframeResizer>
     </div>
     <li className={styles.listItems}>thing 2</li>
     <li className={styles.listItems}>thing 3</li>
     <li className={styles.listItems}>thing 4</li>
    <br/>
    <u1 className={styles.list1}>...and things I enjoy</u1>
     <li className={styles.listItems}>Browser NES Emulator
   <button className={styles.button1} onClick={hideNES}>Open/Close</button></li>
  <div id="nesHide" className={styles.NES}>
   <IframeResizer  className={styles.iframe1} src="https://nests-d3qhjnu95-altaran.vercel.app/"></IframeResizer>
  </div>
  <li className={styles.listItems}>thing 2</li>
     <li className={styles.listItems}>thing 3</li>
     <li className={styles.listItems}>thing 4</li>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  </div>
);


export default Alt;
