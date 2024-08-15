import React, { useEffect, useState } from "react";
import styles from './aloecam.module.css';
import startMotor1 from "../aloecam/startmotor1";
import Sound1 from "../randomButton/sound1";

// List of available sound files
const SOUND_FILES = [
  'hohoho.mp3',
  'HappyNewYear.mp3',
  'haha.mp3',
  'doh.mp3',
  'chunky.mp3',
  'mario.mp3',
  'idiots.mp3',
  'swimming.mp3'
];

const Clicks = () => {
  const [clicks, setClicks] = useState([]);
  const [selectedSound, setSelectedSound] = useState('doh.mp3'); // Default sound

  const fetchData = () => {
    fetch("http://api.altaran.duckdns.org/clicks")
      .then(response => response.json())
      .then(data => setClicks(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  function clickity2() {
    startMotor1();
    Sound1(selectedSound);
    fetchData();
  }

  return (
    <div className={styles.clicks}>
      {clicks.length > 0 && (
        <div>
          {clicks.map(user => (
            <p className={styles.dropCount} key={user.id}>
              <button className={styles.button1} onClick={clickity2}>
                Drop it Like It's Hot
              </button>
              {user.id} Drops to Date: {user.clicks}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Clicks;
