import React from 'react';
import styles from "./space.module.css"
import RocketLaunchSchedule from './launches';
// import SpaceXNews from './spaceXNews';


const Space = () => (
<div className={styles.space}>
<h1>Upcoming Rocket Launch Schedule</h1>
<RocketLaunchSchedule />
{/* <br />
<br />
<h1>SpaceX News</h1>
<SpaceXNews /> */}


</div>

);



export default Space;
