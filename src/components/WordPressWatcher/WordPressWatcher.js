import React, { useState, useEffect } from "react";
import "./WordPressWatcher.module.css"; // Import a CSS file for styling

const WordPressWatcher = () => {
  const [newEpisodes, setNewEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await fetch("https://bobsnews.altaran.us//wp-json/podlove/v2/episodes"); // Replace with the actual API endpoint for your episode data
        const data = await response.json();

        setNewEpisodes(data);
      } catch (error) {
        console.error("Error fetching episode data:", error);
      }
    };

    fetchEpisodes();

    const interval = setInterval(fetchEpisodes, 5000); // Refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="episode-container">
      {newEpisodes.length > 0 && (
        <>
          {newEpisodes.map((episode, index) => (
            <div key={index} className="episode-box">
              <h3>{episode.title}</h3>
              <p>{episode.subtitle}</p>
              <a href={episode.link} target="_blank" rel="noopener noreferrer">
                Listen
              </a>
              {episode.audio && episode.audio[0] && (
                <audio controls>
                  <source src={episode.audio[0].url} type={episode.audio[0].mimeType} />
                </audio>
              )}
              {episode.poster && (
                <img src={episode.poster} alt={episode.title} />
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default WordPressWatcher;
