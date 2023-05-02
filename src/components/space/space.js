import React from 'react';
import styles from "./space.module.css"
import RocketLaunchSchedule from './launches';

import ReactGA from 'react-ga4';
const TRACKING_ID = "G-1ZRM3378D2"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const Space = () => (
<div className={styles.space}>

<RocketLaunchSchedule />

</div>

);



export default Space;
