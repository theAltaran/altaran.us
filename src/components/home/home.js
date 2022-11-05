import React from 'react';
import styles from './home.module.css';
import RandomButton from '../randomButton2/randomButton2';
const Home = () => (
  <div className={styles.Home}>

    <div className={styles.box1} >
    <h3>Sometimes I just do things, because the voices tell me to.</h3>
    <h2>Do you like my penguins?</h2>
    <RandomButton/>
      </div>
       </div>
);


export default Home;
