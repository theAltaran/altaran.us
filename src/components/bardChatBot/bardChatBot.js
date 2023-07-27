import React, { useState } from "react";
import styles from "../altAI/altAI.module.css"; // Import the combined CSS module

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
      setUserMessage(""); // Clear the input box after sending the message
    } catch (error) {
      console.error("An error occurred while processing your request:", error);
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendButtonClick = () => {
    handleSendMessage();
  };

  return (
    <div className={styles.chatContainer}>
      {/* Heading */}
      <h1>Bard</h1>

      {/* Render the bardBot.png image */}
      <div className={styles.ImageContainer}>
        <img src="./bardBot.png" alt="Bard" className={styles.botImage} />
      </div>

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
          placeholder="What would you like to know?"
          value={userMessage}
          onChange={handleInputChange}
          onKeyPress={handleEnterKeyPress} // Add the onKeyPress event listener
          className={styles.inputBox} // Add the className for the input box here
        />
        <button onClick={handleSendButtonClick} className={styles.sendButton}>Send</button> {/* Add the className for the send button here */}
      </div>
    </div>
  );
};

export default BardChatBot;
