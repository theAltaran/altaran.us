import React, { useState } from 'react';
import axios from 'axios';
import styles from './bobsnews.module.css';

const BobsNews = () => {
  const [category, setCategory] = useState('news');
  const [starterInfo, setStarterInfo] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [contentGenerated, setContentGenerated] = useState(false);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleStarterInfoChange = (e) => {
    setStarterInfo(e.target.value);
  };

  const handleGenerateContent = () => {
    setLoading(true);

    axios.post('http://64.176.195.225:60000/generate-content', {
      category: category,
      starter_info: starterInfo,
    })
    .then((response) => {
      setResult(response.data);
      setContentGenerated(true);
    })
    .catch((error) => {
      setResult({ error: "Failed to generate content." });
    })
    .finally(() => {
      setLoading(false);
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGenerateContent();
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Bob's News Generator</h2>
      <div className={styles.selectContainer}>
        <label htmlFor="category" className={styles.label}>Select a category:</label>
        <select id="category" value={category} onChange={handleCategoryChange} className={styles.select}>
          <option value="news">News</option>
          <option value="fiction">Fiction</option>
          <option value="sports">Sports</option>
          <option value="weather">Weather</option>
          {/* <option value="automotive">Automotive</option> */}
        </select>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="starterInfo" className={styles.label}>Topic:</label>
        <input
          type="text"
          id="starterInfo"
          value={starterInfo}
          onChange={handleStarterInfoChange}
          onKeyPress={handleKeyPress} // Add the event listener for Enter key
          className={styles.inputBox}
        />
      </div>
      <button onClick={handleGenerateContent} className={styles.sendButton}>Generate Content</button>
      <div className={styles.resultContainer}>
        <h3 className={styles.resultTitle}>Result:</h3>
        {loading ? (
          <div className={styles.spinnerContainer}>
            <div className={styles.spinner}></div>
          </div>
        ) : contentGenerated && result && !result.error ? (
          <div className={styles.storyLinkContainer}>
            <p className={styles.storyLink}>Your Story is Ready:</p>
            <a href={result.rendered_address} target="_blank" rel="noopener noreferrer">Your Story is Ready</a>
          </div>
        ) : (
          <pre className={styles.result}>{result && result.error}</pre>
        )}
      </div>
    </div>
  );
};

export default BobsNews;
