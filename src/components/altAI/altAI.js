import React, { useState } from 'react';
import styles from './altAI.module.css';
import * as openai from 'openai';

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
      engine: 'text-davinci-003', // GPT-3.5-turbo engine
      prompt: prompt,
      maxTokens: 1024,
      n: 1,
      stop: '\n',
    });
    setAnswer(completions.data[0].text);
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

      {answer ? <h6 className={styles.response}>{answer}</h6> : null}
    </div>
  );
}

export default ALTai;
