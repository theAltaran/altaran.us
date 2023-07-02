import React from 'react';
import styles from './space.module.css';
import LiveStreamWall from './feed';
import RocketLaunchSchedule from "./launches"

const Space = () => (
  <div className={styles.space}>
    <h1>Upcoming Rocket Launch Schedule</h1>
    <RocketLaunchSchedule />
    <br />
    <br />
    <h1>All Live Streams</h1>
    {/* <SpaceXNews /> */}
    <div className={styles.videoBox}>
      <LiveStreamWall />
    </div>
  </div>
);

export default Space;
