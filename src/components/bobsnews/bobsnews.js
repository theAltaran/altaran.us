import React, { useState } from 'react';
import axios from 'axios';
import styles from './bobsnews.module.css'; // Import the CSS styles

const BobsNews = () => {
  const [category, setCategory] = useState('news');
  const [starterInfo, setStarterInfo] = useState('');
  const [result, setResult] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleStarterInfoChange = (e) => {
    setStarterInfo(e.target.value);
  };

  const handleGenerateContent = () => {
    axios.post('https://wp.altaran.duckdns.org/generate-content', {
      category: category,
      starter_info: starterInfo,
    })
    .then((response) => {
      const renderedAddress = response.data.rendered_address; // Extract the "rendered_address" from the API response
      setResult(renderedAddress); // Set the "rendered_address" to the "result" state
    })
    .catch((error) => {
      setResult(JSON.stringify({ error: "Failed to generate content." }));
    });
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
          {/* <option value="random">Random</option> */}
        </select>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="starterInfo" className={styles.label}>Topic:</label>
        <input
          type="text"
          id="starterInfo"
          value={starterInfo}
          onChange={handleStarterInfoChange}
          className={styles.inputBox} // Use the inputBox class for the input field
        />
      </div>
      <button onClick={handleGenerateContent} className={styles.sendButton}>Generate Content</button>
      <div className={styles.resultContainer}>
        <h3 className={styles.resultTitle}>Result:</h3>
        <pre className={styles.result}>{result}</pre>
      </div>
    </div>
  );
};

export default BobsNews;