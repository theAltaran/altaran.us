import React from 'react';
import styles from './space.module.css';
import LiveStreamWall from './feed';
import RocketLaunchSchedule from "./launches"
// import SpaceXNews from './spaceXNews';
import StarShipStatus from './starShipStatus';

const Space = () => (
  <div className={styles.space}>
    {/* <SpaceXNews /> */}
    <div className={styles.starShipStatusContainer}>
      <StarShipStatus />
    </div>
    <h1>Upcoming Launch Schedule</h1>
    <RocketLaunchSchedule />
    <br />
    <br />
    <h1>Live Streams</h1>
    <div className={styles.videoBox}>
      <LiveStreamWall />
    </div>
  </div>
);

export default Space;
