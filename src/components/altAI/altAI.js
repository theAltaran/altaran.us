import React, { useState } from 'react'
import styles from './altAI.module.css';
const { Configuration, OpenAIApi } = require("openai");

function ALTai() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [enable, setEnable] = useState(false);
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const handleSubmit = async() => {
    setAnswer("")
    setEnable(true);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: question,
      temperature: 0,
      max_tokens: 1024,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    setAnswer(response.data.choices[0].text);
    setEnable(false);
  }
  return (
    <div className={styles.AltAi}>
      <h1>Ask me anything</h1>
      <textarea name="" id="" cols="40" rows="10" onChange={(e) => setQuestion(e.target.value)}></textarea>
      <br />
      <button onClick={handleSubmit}>Answer please!</button>
      {
        enable ? <h3>Loading...</h3> : null
      }
      <br />

      {
        <h6>{answer}</h6>
      }
    </div>
  )
}

export default ALTai