import React, { useState } from "react";
import styles from "./bardChatBot.module.css"; // Import the CSS module

const BardChatBot = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseContent, setResponseContent] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleSendMessage = async () => {
    setIsLoading(true);

    try {
      const apiKey = process.env.REACT_APP_BARD_API_KEY; // Fetch the API key from .env file
      const conversationId = "c_1c6437b0245c6e1f"; // Replace with the conversation ID you want to use

      const response = await fetch("https://bard.altaran.duckdns.org/api/bard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          query: userMessage,
          api_key: apiKey,
          conversation_id: conversationId,
        }),
      });

      const data = await response.json();
      setResponseContent(data.content);
      setIsLoading(false);
    } catch (error) {
      console.error("An error occurred while processing your request:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatContainer}>
      {/* Render the bob.png image */}
      <img src="./bardBot.png" alt="Bob" className={styles.bobImage} />

      {/* Chat messages */}
      <div className={styles.chatMessages}>
        {/* Display user messages */}
        <div className={`${styles.chatMessage} ${styles.userMessage}`}>
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

export default BardChatBot;
