import React, { useState, useEffect } from "react";

const RocketLaunchSchedule = () => {
  const [launches, setLaunches] = useState([]);

  // Get the list of upcoming rocket launches from NASA
  const getLaunches = async () => {
    const url = "https://launchlibrary.net/1.4/launch/next/5";
    const response = await fetch(url);
    const data = await response.json();
    setLaunches(data.launches);
  };

  useEffect(() => {
    getLaunches();
  }, []);

  // Display the schedule
  const companies = launches.reduce((acc, launch) => {
    const company = launch.rocket.agencies[0]?.name || "Unknown";
    if (!acc[company]) {
      acc[company] = [];
    }
    acc[company].push(launch);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(companies).map((company) => (
        <div key={company}>
          <h2>{company}</h2>
          <ul>
            {companies[company].map((launch) => (
              <li key={launch.id}>{launch.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RocketLaunchSchedule;
