import React, { useEffect, useState } from 'react';
import styles from './feed.module.css';

const LiveStreamWall = () => {
  const [liveStreams, setLiveStreams] = useState([]);
  const [channelTitles, setChannelTitles] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const channelIds = [
      'UCSUu1lih2RifWkKtDOJdsBA',
      'UCFwMITSkc1Fms6PoJoh1OUQ',
    ];

    const fetchChannelTitle = async (channelId) => {
      try {
        const response = await fetch(`https://viewtube.altaran.duckdns.org/api/channels/${channelId}`);
        const data = await response.json();
        const title = data.title;
        setChannelTitles((prevChannelTitles) => ({
          ...prevChannelTitles,
          [channelId]: title,
        }));
      } catch (error) {
        console.error(`Error fetching channel title for channel ${channelId}:`, error);
      }
    };

    const fetchLiveStreams = async () => {
      try {
        const promises = channelIds.map(async (channelId) => {
          await fetchChannelTitle(channelId);
          const response = await fetch(`https://viewtube.altaran.duckdns.org/api/channels/${channelId}/livestreams?liveNow=true`);
          const data = await response.json();
          return data.items; // Extract the "items" array from the response
        });

        const streams = await Promise.all(promises);
        const flattenedStreams = streams.flat();
        setLiveStreams(flattenedStreams);
        setError(false); // Reset the error state on successful fetch
      } catch (error) {
        setError(true);
        console.error('Error fetching live streams:', error);
      }
    };

    fetchLiveStreams();
  }, []);

  return (
    <div className={styles.container}>
      {Object.keys(channelTitles).map((channelId) => (
        <div key={channelId}>
          <h2>Channel: {channelTitles[channelId]}</h2>
          <div className={styles.videoContainer}>
            {liveStreams
              .filter((stream) => stream?.authorId === channelId && stream?.publishedText === 'Live' && stream?.liveNow)
              .map((stream) => (
                <a
                  key={stream.videoId}
                  href={`https://viewtube.altaran.duckdns.org/watch?v=${stream.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.videoLink}
                >
                  <img
                    src={stream.videoThumbnails[0]?.url}
                    alt={stream.title}
                    className={styles.videoImage}
                  />
                  <p>{stream.title}</p> {/* Display additional information */}
                  <p>{stream.viewCountText}</p> {/* Display additional information */}
                </a>
              ))}
          </div>
        </div>
      ))}
      {!error && (!liveStreams || liveStreams.length === 0) && (
        <div>No live streams available</div>
      )}
    </div>
  );
};

export default LiveStreamWall;