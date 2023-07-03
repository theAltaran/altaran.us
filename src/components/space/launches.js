import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./RocketLaunchSchedule.css";

const companies = [
  {
    name: "SpaceX",
    homepage: "https://www.spacex.com/",
    logo: "https://logo.clearbit.com/spacex.com"
  },  
  {
    name: "Rocket Lab Ltd",
    homepage: "https://www.rocketlabusa.com/",
    logo: "https://logo.clearbit.com/rocketlabusa.com"
  },
  {
    name: "Virgin Galactic",
    homepage: "https://www.virgingalactic.com/",
    logo: "https://companieslogo.com/img/orig/SPCE_BIG-0ce5e6e6.png"
  },
  {
    name: "Russian Federal Space Agency",
    homepage: "http://en.roscosmos.ru/",
    logo: "https://logos-download.com/wp-content/uploads/2022/01/Roscosmos_Logo-700x466.png"
  },
  {
    name: "Korea Aerospace Research Institute",
    homepage: "https://www.kari.re.kr/eng.do",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/KARI_seal.png"
  },
  {
    name: "China Aerospace Science and Technology Corporation",
    homepage: "http://english.spacechina.com/",
    logo: "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/logo/china2520aerospace2520science2520and2520technology2520corporation_logo_20220826093937.png"
  }
];

const RocketLaunchSchedule = () => {
  const [launches, setLaunches] = useState([]);

  const getLaunches = async () => {
    const url = "https://ll.thespacedevs.com/2.2.0/launch/upcoming/";
    const response = await fetch(url);
    const data = await response.json();
    const launchList = await Promise.all(
      data.results.map(async (launch) => {
        const name = launch.name;
        const providerName = launch.launch_service_provider?.name || "Unknown";
        const date = launch.net;
        const providerHomepage = launch.launch_service_provider?.info_url || "#";
        return { name, rocket: { providerName, providerHomepage }, date };
      })
    );
    setLaunches(launchList);
  };

  useEffect(() => {
    getLaunches();
  }, []);

  const pageTitle = "altaran.us";
  const pageDescription = "Alt's current list of Rocket Launches";

  // Filter out companies without any launches
  const filteredCompanies = companies.filter((company) =>
    launches.some((launch) => launch.rocket.providerName === company.name)
  );

  return (
    <div className="launch-schedule-container">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      {filteredCompanies.map((company) => (
        <div key={company.name} className="company-container">
          <div className="company-logo">
            <img src={company.logo} alt={`${company.name} logo`} />
          </div>
          <h6 className="company-heading">
            <a href={company.homepage} target="_blank" rel="noopener noreferrer">
              {company.name}
            </a>
          </h6>
          <ul className="launch-list">
            {launches
              .filter((launch) => launch.rocket.providerName === company.name)
              .map((launch) => (
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
