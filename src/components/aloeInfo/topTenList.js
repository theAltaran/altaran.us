import React, { useEffect, useState } from "react"
import styles from './aloeInfo.module.css';




const TopTenClicks = () => {
  const [clicks, setClicks] = useState([])
  const [lastClick, setDate] = useState([])

  const fetchData = () => {
    fetch("https://aloecamapi.herokuapp.com/top10")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setClicks(data)
      })}

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData2 = () => {
    fetch("https://odd-plum-lemming-tie.cyclic.app/top10")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setDate(data)
      })}

  useEffect(() => {
    fetchData2()
  }, [])


  return (
    <div className={styles.clicks}>
      
      {clicks.length > 0 && lastClick.length > 0 &&(
        <div>
          {clicks.map(user => (
            <p>Clicks: {user.clicks} ----- {user.lastClick} </p>
          ))}
        </div>
         
      )}
    </div>
  )
}

export default TopTenClicks