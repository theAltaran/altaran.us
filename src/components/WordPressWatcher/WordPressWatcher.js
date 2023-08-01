import React, { useState, useEffect } from "react";

const WordPressWatcher = () => {
  const [newPostLink, setNewPostLink] = useState(null);

  // Simulating watching for new posts (replace this with your actual implementation)
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulating the case where a new post link is received
      setNewPostLink("https://bobsnews.altaran.us/");
    }, 5000); // Check for new posts every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {newPostLink && (
        <div>
          {/* Display the new post link inside the BobsNews component */}
          <p>New Post: <a href={newPostLink} target="_blank" rel="noopener noreferrer">{newPostLink}</a></p>
        </div>
      )}
    </>
  );
};

export default WordPressWatcher;
