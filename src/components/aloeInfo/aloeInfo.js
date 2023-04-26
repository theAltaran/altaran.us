import React from 'react';
import styles from './aloeInfo.module.css';
import TopTenList from './topTenList';

const AloeInfo = () => (
  
  <div id="infoHide" className={styles.Rules}>
    <hr/>
    <p className={styles.aloeInfo}>aloeInfo</p>
    <br/>
    {/* *as of 3/3/2023 the aloe has been moved temporarily to provide more light,
    <br/>
     for some baby succulents.  Will be back soon.
     <br/>
    <br/>
    Lights are on from 8AM EST to 10PM EST / 1PM to 3:00AM UTC
    <br/>
    nightAloe feature should now be active
    <br/> */}
    <br/>
    Marble Motor is on from 10AM EST to 10PM EST / 3PM to 3:00AM UTC**
    <br/>
    <br/>
   The counter will not update on your first click. 
    <br/>
    But it does update the database in the background, so 
    <br/>
    on your next click it will update by one.   

    <br/>
    <br/>
    *tracking via IP for Now.  Will have more options in the future.
    <br/>
    ** Can't have marbles dropping while Fiona and I sleep now can I? 
    <br/>
    <br/>    
    <hr/>
        <div className={styles.TopTen}>
    <p className={styles.TopTenHeading}>Top 25 Clickers* and Their Last Click</p>
    <br/>
    <TopTenList />
    <hr/>
  </div>

  </div>
);



export default AloeInfo;
