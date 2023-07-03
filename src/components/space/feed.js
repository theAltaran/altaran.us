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
        const response = await fetch(`https://viewtube.altaran.duckdns.org/api/channels/${channelId}/livestreams?sort=sort`);
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
          const response = await fetch(`https://viewtube.altaran.duckdns.org/api/channels/${channelId}/livestreams?sort=sort`);
          const data = await response.json();
          return data;
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
          {liveStreams
            .filter((stream) => stream?.authorId === channelId && stream?.publishedText === 'Live')
            .map((stream) => (
              <div key={stream.videoId} className={styles.videoContainer}>
                <a
                  href={`https://viewtube.altaran.duckdns.org/watch?v=${stream.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={stream.videoThumbnails[0]?.url}
                    alt={stream.title}
                    className={styles.videoImage}
                  />
                </a>
              </div>
            ))}
        </div>
      ))}
      {!error && (!liveStreams || liveStreams.length === 0) && (
        <div>No live streams available</div>
      )}
    </div>
  );
};

export default LiveStreamWall;
