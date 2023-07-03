import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './spaceXNews.css'; // Import CSS file

const TickerBar = ({ articles }) => {
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    if (articles.length > 0) {
      const interval = setInterval(() => {
        setTickerIndex((prevIndex) => (prevIndex + 1) % articles.length);
      }, 5000); // Change the duration as needed

      return () => {
        clearInterval(interval);
      };
    }
  }, [articles]);

  return (
    <div className="ticker-bar">
      <div className="ticker-text-container">
        {articles.map((article, index) => (
          <a
            key={index}
            className={`ticker-text ${index === tickerIndex ? 'active' : ''}`}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {article.title}
          </a>
        ))}
      </div>
    </div>
  );
};

const SpaceXNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getSpaceXNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'space',
            apiKey: process.env.REACT_APP_NEWSAPI_KEY,
            pageSize: 10,
          },
        });

        // Set the list of news articles
        setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };

    getSpaceXNews();
  }, []);

  return (
    <div className="container2">
      {/* <h1>Space News</h1> */}
      {articles.length > 0 ? (
        <TickerBar articles={articles} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SpaceXNews;
