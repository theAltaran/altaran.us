import React, { useEffect, useState } from "react"
import styles from './aloeInfo.module.css';




const Clicks = () => {
  const [clicks, setClicks] = useState([])

  const fetchData = () => {
    fetch("https://aloecamapi.herokuapp.com/top50")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setClicks(data)
      })}

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className={styles.clicks}>
      {clicks.length > 0 && (
        <div>
          {clicks.map(user => (
            <p>{user.clicks}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Clicks