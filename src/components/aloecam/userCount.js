import React, { useEffect, useState } from "react"
import styles from './aloecam.module.css';

const UserCount = () => {
  const [aloeCam, setCount] = useState([])

  const fetchData = () => {
    fetch("https://aloecamapi.herokuapp.com/userCount")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCount(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={styles.userCounts}>
      {aloeCam.length > 0 && (
        <div>Total Unique* Users to Date:
          {aloeCam.map(user => (<p key={user.id}>{user.aloeCam}</p>
          ))}

        </div>
      )}
    </div>
  )
}

export default UserCount