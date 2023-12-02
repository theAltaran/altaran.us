import React, { useEffect, useState } from "react"
import styles from './aloecam.module.css';
import startMotor1 from "../aloecam/startmotor1";
import Sound1 from "../randomButton/sound1";
// import lightsOn from "./lightsOn";



const Clicks = () => {
  const [clicks, setClicks] = useState([])

  const fetchData = () => {
    fetch("https://api.altaran.us/clicks")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setClicks(data)
      })}



  useEffect(() => {
    fetchData()
  }, [])

  function clickity2() {
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
    
}

  return (
    <div className={styles.clicks}>
      {clicks.length > 0 && (
        <div>
          {clicks.map(user => (
            <p className={styles.dropCount}>  <button className={styles.button1} onClick={clickity2}> Drop it LIke Its Hot</button>
            {user.id}Drops to Date: {user.clicks}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Clicks