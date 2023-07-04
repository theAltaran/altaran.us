import React, { useEffect, useState } from 'react';
import './starShipStatus.css';

const StarShipStatus = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    fetch('https://ll.thespacedevs.com/2.2.0/dashboard/starship/')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.updates) {
          const lastThreeUpdates = data.updates.slice(0, 3);
          setUpdates(lastThreeUpdates);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="starship-ticker">
      <h1 className="updates-label">StarShip Updates</h1>
      <div className="ticker-container">
        {updates.map((update) => (
          <div key={update.id} className="ticker-box">
            <img src={update.profile_image} alt="Profile" />
            <div className="update-details">
              <p className="ticker-text">{update.comment}</p>
              <p className="ticker-date">{new Date(update.created_on).toLocaleDateString()}</p> {/* Add date */}
              <div className="hover-text">{update.comment}</div>
              <a href={update.info_url} target="_blank" rel="noopener noreferrer">
                More Info
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarShipStatus;
