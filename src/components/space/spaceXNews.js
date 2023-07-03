import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './spaceXNews.css'; // Import CSS file

const TickerBar = ({ articles }) => {
  const [tickerIndex, setTickerIndex] = useState(0);
  const [tickerText, setTickerText] = useState('');

  useEffect(() => {
    if (articles.length > 0) {
      setTickerText(articles[tickerIndex].title);
      const interval = setInterval(() => {
        setTickerIndex(prevIndex => (prevIndex + 1) % articles.length);
      }, 3000); // Change the duration as needed

      return () => {
        clearInterval(interval);
      };
    }
  }, [articles, tickerIndex]);

  return (
    <div className="ticker-bar">
      <marquee className="ticker-text" behavior="scroll" direction="left">
        {tickerText}
      </marquee>
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
            pageSize: 10
          }
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
    <div className="container">
      <h1>Space News</h1>
      {articles.length > 0 ? (
        <TickerBar articles={articles} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SpaceXNews;
