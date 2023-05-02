import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./RocketLaunchSchedule.css";

const RocketLaunchSchedule = () => {
  const [launches, setLaunches] = useState([]);

  const getLaunches = async () => {
    const url = "https://ll.thespacedevs.com/2.2.0/launch/upcoming/";
    const response = await fetch(url);
    const data = await response.json();
    const launchList = data.results.map((launch) => {
      const name = launch.name;
      const company = launch.launch_service_provider?.name || "Unknown";
      const date = launch.net;
      return { name, rocket: { company }, date };
    });
    setLaunches(launchList);
  };

  useEffect(() => {
    getLaunches();
  }, []);

  const companies = launches.reduce((acc, launch) => {
    const company = launch.rocket.company;
    if (!acc[company]) {
      acc[company] = [];
    }
    acc[company].push(launch);
    return acc;
  }, {});

  const pageTitle = "Alt's Rocket Launch Schedule";
  const pageDescription = "Alt's current list of Rocket Launches";

  return (
    <div className="launch-schedule-container">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      {Object.keys(companies).map((company) => (
        <div key={company} className="company-container">
          <h6 className="company-heading">{company}</h6>
          <ul className="launch-list">
            {companies[company].map((launch) => (
              <li key={launch.name} className="launch-item">
                <span className="launch-name">{launch.name}</span>
                <span className="launch-date">
                  {new Date(launch.date).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RocketLaunchSchedule;
