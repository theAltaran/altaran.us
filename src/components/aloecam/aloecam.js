import React from 'react';
import RandomButton from '../randomButton/randomButton';
import styles from './aloecam.module.css';
import Rules from '../../components/rules/rules';

const Aloecam = () => (
  <div className={styles.Aloecam}>
    <br/>
    <br/>
    <br/>
   <h1>Welcome to the home of the aloeCam</h1>
   <img className={styles.img1} src="https://aloecam.ddns.net:6969"alt='aloeCam'></img>
    <br/>
    <br/>
       <RandomButton/>
       <br/>
       <iframe name="clickCounter" title="clickCounter" className={styles.img2} src="https://aloecamapi.herokuapp.com/" alt='clickCounter'></iframe>
       <br/>
       <br/>
      <Rules/>
      <br/>
      <br/>

  </div> 
);

export default Aloecam;
