import React from 'react';
import styles from "./space.module.css"
import RocketLaunchSchedule from './launches';
import SpaceXNews from './spaceXNews';

import ReactGA from 'react-ga4';
const TRACKING_ID = "G-1ZRM3378D2"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const Space = () => (
<div className={styles.space}>
<h1>Upcoming Rocket Launch Schedule</h1>
<RocketLaunchSchedule />
<br />
<br />
<h1>SpaceX News</h1>
<SpaceXNews />


</div>

);



export default Space;
