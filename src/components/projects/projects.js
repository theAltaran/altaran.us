import React from 'react';
import styles from './projects.module.css';
import IframeResizer from 'iframe-resizer-react';

function hideNES() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const Projects = () => (
  <div className={styles.Projects}>    
    <h1>things Ive put time into... </h1>
    <h5>thing 1</h5>
    <h5>thing 2</h5>
    <h5>thing 3</h5>
    <h5>thing 4</h5>    
    <br/>
    <h1>...and things I enjoy</h1>
    <h5>Browser NES Emulator</h5>
    <div id="myDIV" className={styles.NES}>
<IframeResizer  className={styles.iframe1} src="https://nests-d3qhjnu95-altaran.vercel.app/"></IframeResizer>
</div>
    <br/>
    <br/>
    <button className={styles.button1} onClick={hideNES}>Click to open NES</button>
    <br/>
    <br/>

    <br/>
  </div>
);


export default Projects;
