import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./spaceXNews.css";
// require("dotenv").config();

const SpaceXNews = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const apiKey = process.env.REACT_APP_SpaceXNews_API_KEY;
    const url = `https://api.goperigon.com/v1/all?apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes("spacex")
    );
    const newsList = filteredData.map((newsItem) => {
      const title = newsItem.title;
      const date = newsItem.published_at;
      const url = newsItem.url;
      return { title, date, url };
    });
    setNews(newsList);
  };

  useEffect(() => {
    getNews();
  }, []);

  const pageTitle = "altaran.us";
  const pageDescription = "Alt's random list of SpaceX news";

  return (
    <div className="launch-schedule-container">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <div className="company-container">
        {/* <h6 className="company-heading"></h6> */}
        <ul className="launch-list">
          {news.map((newsItem) => (
            <li key={newsItem.title} className="launch-item">
              <a href={newsItem.url} target="_blank" rel="noopener noreferrer" className="launch-name">{newsItem.title}</a>
              <span className="launch-date">
                {new Date(newsItem.date).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpaceXNews;
