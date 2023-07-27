import React, { useState } from "react";
import styles from "./bobChatbot.module.css"; // Import the CSS module

const BobChatbot = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseContent, setResponseContent] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleSendMessage = async () => {
    setIsLoading(true);
  
    try {
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY; // Use the REACT_APP_OPENAI_API_KEY environment variable
  
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userMessage }],
          temperature: 0.7
        }),
      });
  
      const data = await response.json();
      setResponseContent(data.choices[0].message.content);
      setIsLoading(false);
    } catch (error) {
      console.error("An error occurred while processing your request:", error);
      setIsLoading(false);
    }
  };
  

  return (
    <div className={styles.chatContainer}>
      {/* Render the bob.png image */}
      <img src="/bob.png" alt="Bob" className={styles.bobImage} />

      {/* Chat messages */}
      <div className={styles.chatMessages}>
        {/* Display user messages */}
        <div
          className={`${styles.chatMessage} ${styles.userMessage}`}
        >
          {userMessage}
        </div>

        {/* Display bot responses */}
        {responseContent && (
          <div className={`${styles.chatMessage} ${styles.botMessage}`}>
            {responseContent}
          </div>
        )}

        {/* Display loading message */}
        {isLoading && (
          <div className={`${styles.chatMessage} ${styles.botMessage}`}>
            Loading...
          </div>
        )}
      </div>

      {/* Input area */}
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type your question..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default BobChatbot;
