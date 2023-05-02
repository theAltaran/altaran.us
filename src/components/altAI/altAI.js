import React, { useState } from 'react';
import styles from './altAI.module.css';
import * as openai from 'openai';

import ReactGA from 'react-ga4';
const TRACKING_ID = "G-QTQ0K2FD5Z"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function ALTai() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [enable, setEnable] = useState(false);

  const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const handleSubmit = async () => {
    setAnswer('');
    setEnable(true);
    const prompt = `${question}\nAI answer:`;
    const completions = await openai.complete({
      apiKey: openaiApiKey,
      engine: 'davinci-2-5-1',
      prompt: prompt,
      maxTokens: 1024,
      n: 1,
      stop: '\n',
    });
    setAnswer(completions.choices[0].text);
    setEnable(false);
  };

  return (
    <div className={styles.AltAi}>
      <h1>Ask me anything</h1>
      <textarea
        name=""
        id=""
        cols="40"
        rows="10"
        onChange={(e) => setQuestion(e.target.value)}
      ></textarea>
      <br />
      <button onClick={handleSubmit}>Answer please!</button>
      {enable ? <h3>Loading...</h3> : null}
      <br />

      {answer ? (
        <h6 className={styles.response}>{answer}</h6>
      ) : null}
    </div>
  );
}

export default ALTai;
