import React, { useEffect, useState } from "react"
import styles from './aloeInfo.module.css';




const TopTenClicks = () => {
  const [clicks, setClicks] = useState([])

  const fetchData = () => {
    fetch("http://api.altaran.us/top10")
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
            <p>Clicks: {user.clicks} </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default TopTenClicks