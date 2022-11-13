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
      })}

  useEffect(() => {
    fetchData()
  }, [])

  function refreshPage() {
    window.location.reload(true);
  }

  return (
    <div className={styles.clicks}>
      {clicks.length > 0 && (
        <div>
          {clicks.map(user => (
            <p  key={user.id}>Drops to Date: {user.clicks}</p>
          ))}
      <button onClick={refreshPage}>Click to reload!</button>
        </div>
      )}
    </div>
  )
}

export default Clicks