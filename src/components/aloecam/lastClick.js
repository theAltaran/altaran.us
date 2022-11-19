import React, { useEffect, useState } from "react"
import styles from './aloecam.module.css';

const LastClick = () => {
  const [lastClick, setClicks] = useState([])

  const fetchData = () => {
    fetch("https://api.altaran.us/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setClicks(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={styles.lastClick}>
      {lastClick.length > 0 && (
        <div>Timestamp of Last Click
          {lastClick.map(user => (
            <p key={user.id}>{user.lastClick}</p>
          ))}

        </div>
      )}
    </div>
  )
}

export default LastClick