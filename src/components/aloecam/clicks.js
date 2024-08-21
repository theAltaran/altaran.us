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
  'swimming.mp3',
  'guesswhosback.mp3'
];

const Clicks = () => {
  const [clicks, setClicks] = useState([]);
  const [selectedSound, setSelectedSound] = useState('guesswhosback.mp3'); // Default sound
  const [disabled, setDisabled] = useState(false);

  const fetchData = () => {
    fetch("http://api.altaran.us/clicks")
      .then(response => response.json())
      .then(data => setClicks(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  function clickity2() {
    if (disabled) return; // Exit function if disabled

    setDisabled(true);
    startMotor1();
    Sound1(selectedSound); // Use the selected sound
    fetchData();

    // Re-enable button after 5000 ms
    setTimeout(() => setDisabled(false), 5000);
  }

  return (
    <div className={styles.clicks}>
      {clicks.length > 0 && (
        <div>
          {clicks.map(user => (
            <p className={styles.dropCount} key={user.id}>
              <button
                className={styles.button1}
                onClick={clickity2}
                disabled={disabled} // Disable button when disabled state is true
              >
                Drop it Like It's Hot
              </button>
              {user.id} Drops to Date: {user.clicks}
            </p>
          ))}
        </div>
      )}
      <div className={styles.selector}>
        <label htmlFor="soundSelector">Change Sound?</label>
        <select
          id="soundSelector"
          value={selectedSound}
          onChange={(e) => setSelectedSound(e.target.value)}
        >
          {SOUND_FILES.map((sound, index) => (
            <option key={index} value={sound}>
              {sound}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Clicks;
