import React, { useEffect, useState } from 'react';
import styles from './feed.module.css';

const LiveStreamWall = () => {
  const [liveStreams, setLiveStreams] = useState([]);
  const [channelTitles, setChannelTitles] = useState({});
  const [error, setError] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState(null);

  useEffect(() => {
    const channelIds = [
      'UCSUu1lih2RifWkKtDOJdsBA',
      'UCFwMITSkc1Fms6PoJoh1OUQ',
      'UC6uKrU_WqJ1R2HMTY3LIx5Q',
    ];

    const fetchChannelTitle = async (channelId) => {
      try {
        const response = await fetch(`https://viewtube.altaran.duckdns.org/api/channels/${channelId}`);
        const data = await response.json();
        const author = data.author;
        setChannelTitles((prevChannelTitles) => ({
          ...prevChannelTitles,
          [channelId]: author,
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

  const sortedChannelIds = ['UCSUu1lih2RifWkKtDOJdsBA', 'UCFwMITSkc1Fms6PoJoh1OUQ', 'UC6uKrU_WqJ1R2HMTY3LIx5Q']; // Sorted channelIds

  const handleOpenPopup = (channelId) => {
    setSelectedChannel(channelId);
  };

  const handleClosePopup = () => {
    setSelectedChannel(null);
  };

  const getTruncatedTitle = (title) => {
    if (title.length > 25) {
      return `${title.substring(0, 25)}...`;
    }
    return title;
  };

  return (
    <div className={styles.container}>
      {sortedChannelIds.map((channelId) => (
        <div key={channelId} className={styles.videoContainer}>
          <h2 className={styles.channelName}>{channelTitles[channelId]}</h2>
          {/* Commented out the open button
          <div className={styles.openButtonContainer}>
            <button
              className={styles.openButton}
              onClick={() => handleOpenPopup(channelId)}
            >
              Open
            </button>
          </div>
          */}
          {liveStreams
            .filter((stream) => stream?.authorId === channelId && stream?.publishedText === 'Live' && stream?.liveNow)
            .map((stream) => (
              <div key={stream.videoId} className={styles.videoItem}>
                <a
                  href={`https://youtube.com/watch?v=${stream.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.videoLink}
                >
                  <iframe
                    title={stream.title}
                    src={`https://youtube.com/embed/${stream.videoId}`}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                  <p
                    title={stream.title}
                    className={styles.videoTitle}
                  >
                    {getTruncatedTitle(stream.title)}
                  </p>
                </a>
              </div>
            ))}
        </div>
      ))}
      {!error && (!liveStreams || liveStreams.length === 0) && (
        <div>No live streams available</div>
      )}

      {selectedChannel && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <button className={styles.closeButton} onClick={handleClosePopup}>
              Close
            </button>
            <div className={styles.videoPlayer}>
              {liveStreams
                .filter((stream) => stream?.authorId === selectedChannel && stream?.publishedText === 'Live' && stream?.liveNow)
                .map((stream) => (
                  <iframe
                    key={stream.videoId}
                    title={stream.title}
                    src={`https://youtube.com/embed/${stream.videoId}`}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveStreamWall;
