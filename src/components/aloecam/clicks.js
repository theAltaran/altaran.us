import React, { useEffect, useState } from "react"
import styles from './aloecam.module.css';




const Clicks = () => {
  const [clicks, setClicks] = useState([])

  const fetchData = () => {
    fetch("https://aloecamapi.herokuapp.com")
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
    <div className={styles.clicks}>
      {clicks.length > 0 && (
        <div>Total Marble Drops
          {clicks.map(user => (
            <p key={user.id}>{user.clicks}</p>
          ))}
      
        </div>
      )}
    </div>
  )
}

export default Clicks