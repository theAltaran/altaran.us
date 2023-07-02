import React, { useEffect, useState } from 'react';
import styles from './feed.module.css';

const LiveStreamWall = () => {
  const [liveStreams, setLiveStreams] = useState([]);
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  useEffect(() => {
    const channelIds = [
      'UCSUu1lih2RifWkKtDOJdsBA',
      'UCFwMITSkc1Fms6PoJoh1OUQ',
    ];

    const fetchLiveStreams = async () => {
      try {
        const promises = channelIds.map(async (channelId) => {
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&eventType=live&type=video&part=snippet`
          );
          const data = await response.json();
          return data.items;
        });

        const streams = await Promise.all(promises);
        const flattenedStreams = streams.flat();
        setLiveStreams(flattenedStreams);
      } catch (error) {
        console.error('Error fetching live streams:', error);
      }
    };

    fetchLiveStreams();
  }, [apiKey]);

  return (
    <div className={styles.container}>
      {liveStreams &&
        liveStreams.map((stream) => (
          <div key={stream.id.videoId} className={styles.videoContainer}>
            <a
              href={`https://viewtube.altaran.duckdns.org/watch?v=${stream.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={stream.snippet.thumbnails.medium.url} alt={stream.snippet.title} className={styles.videoImage} />
            </a>
          </div>
        ))}
      {!liveStreams || liveStreams.length === 0 ? (
        <div>No live streams available</div>
      ) : null}
    </div>
  );
};

export default LiveStreamWall;
