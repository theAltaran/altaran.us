import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsAPI from 'newsapi';

const newsapi = new NewsAPI('e9d597d095384971a871e093fe5a0ab7');
const reqOptions = {
  'mode': 'cors', 
  headers: {
    'Access-Control-Allow-Origin': 'https://altaran.us'

  }
};

const SpaceXNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getSpaceXNews = async () => {
      try {
        // Get a list of news sources related to SpaceX
        const sourcesResponse = await axios.get('https://newsapi.org/v2/sources', {
          params: {
            category: 'science',
            language: 'en',
            country: 'us',
            q: 'spacex'
          },
          headers: {
            'X-Api-Key': 'e9d597d095384971a871e093fe5a0ab7'
          },
          ...reqOptions
        });

        // Get random source id from the list of sources
        const sources = sourcesResponse.data.sources;
        const randomSource = sources[Math.floor(Math.random() * sources.length)];

        // Fetch the top headlines from the random source
        const newsResponse = await newsapi.v2.topHeadlines({
          sources: randomSource.id,
          q: 'spacex'
        });

        // Set the list of news articles
        setArticles(newsResponse.articles);
      } catch (error) {
        console.error(error);
      }
    };

    getSpaceXNews();
  }, []);

  return (
    <div>
      {/* <h1>Random SpaceX News</h1> */}
      <ul>
        {articles.map(article => (
          <li key={article.title}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpaceXNews;
