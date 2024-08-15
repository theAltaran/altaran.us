import React, { useEffect, useState } from "react";
import styles from './aloecam.module.css';
import startMotor1 from "../aloecam/startmotor1";
import Sound1 from "../randomButton/sound1";
// import lightsOn from "./lightsOn";

const Clicks = () => {
  const [clicks, setClicks] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // State to track if the button is disabled

  const fetchData = () => {
    fetch("http://api.altaran.duckdns.org/clicks")
      .then((response) => response.json())
      .then((data) => setClicks(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  function clickity2() {
    if (isButtonDisabled) return; // Prevents function execution if button is disabled

    setIsButtonDisabled(true); // Disable the button
    // lightsOn();
    startMotor1();
    // Sound1('hohoho.mp3')
    // Sound1('HappyNewYear.mp3')
    // Sound1('haha.mp3');
    Sound1('doh.mp3');
    // Sound1('chunky.mp3');
    // Sound1('mario.mp3');
    // Sound1('idiots.mp3');
    // Sound1('swimming.mp3')
    fetchData();

    // Re-enable the button after 3 seconds
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 3000);
  }

  return (
    <div className={styles.clicks}>
      {clicks.length > 0 && (
        <div>
          {clicks.map((user) => (
            <p className={styles.dropCount} key={user.id}>
              <button
                className={styles.button1}
                onClick={clickity2}
                disabled={isButtonDisabled} // Disables the button when state is true
              >
                Drop it Like Its Hot
              </button>
              Drops to Date: {user.clicks}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Clicks;
