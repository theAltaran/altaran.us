import React, { useEffect, useState } from "react"
import styles from './aloeInfo.module.css';




const TopTenDates = () => {
  const [lastClick, setDate] = useState([])

  const fetchData = () => {
    fetch("https://aloecamapi.herokuapp.com/top10")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setDate(data)
      })}

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className={styles.lastClick}>
      {lastClick.length > 0 && (
        <div>
          {lastClick.map(user => (
            <p>{user.lastClick}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default TopTenDates