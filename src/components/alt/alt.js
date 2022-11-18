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

function hideBreaks() {
  var x = document.getElementById("weirdStuff");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function nesClick () {
  hideNES();
  hideBreaks();
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
   <button className={styles.button1} onClick={nesClick}>Open/Close</button></li>
  <div id="nesHide" className={styles.NES}>
   <IframeResizer  className={styles.iframe1} src="https://nests.vercel.app/"></IframeResizer>
   <br/>
   <p className={styles.nesRom}>You need to supply your own NES rom.....Im not gonna help you pirate!</p>
   <p className={styles.nesControls}><img src="nesControls.png" alt="alt" /></p>  
  </div>
  <br/>
  {/* Please ALt, find a better way to do this in the future.  This is darn right ugly. */}
<div className={styles.Weirdstuff} id="weirdStuff">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
  <li className={styles.listItems}>thing 2</li>
     <li className={styles.listItems}>thing 3</li>
     <li className={styles.listItems}>thing 4</li>

  </div>
);


export default Alt;
