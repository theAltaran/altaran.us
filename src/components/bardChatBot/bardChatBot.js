import React, { useState } from "react";
import styles from "../altAI/altAI.module.css"; // Import the combined CSS module

const BardChatBot = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  const handleSendMessage = async () => {
    setIsLoading(true);
  
    try {
      const conversationId = "c_1c6437b0245c6e1f";
  
      const response = await fetch("http://127.0.0.1:5000/bard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: userMessage,
        }),
      });
  
      const responseData = await response.text(); // Use text() instead of json()
  
      console.log("Response data:", responseData); // Log the response data
  
      setIsLoading(false);

      // Add the user's message to the chat history only if it's not empty
      if (userMessage.trim() !== "") {
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { role: "user", content: userMessage },
        ]);
      }

      if (data) {
        // Add the bot's response to the chat history
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { role: "bot", content: data },
        ]);
      } else {
        console.error("No valid response received from the Bard API.");
      }

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
    <div className={`${styles.chatContainer} ${styles.commonChatBot}`}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Bard</div>
      </div>

      {/* Render the bardBot.png image */}
      <div className={styles.ImageContainer}>
        <img src="./bardBot.png" alt="Bard" className={styles.botImage} />
      </div>

      {/* Chat messages */}
      <div className={styles.chatMessages}>
        {/* Display all chat messages */}
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={`${styles.chatMessage} ${
              message.role === "user" ? styles.userMessage : styles.botMessage
            }`}
          >
            {message.content}
          </div>
        ))}

        {/* Display loading message */}
        {isLoading && (
          <div className={`${styles.chatMessage} ${styles.botMessage}`}>
            Loading...
          </div>
        )}

        {/* Display the initial empty user message */}
        {!chatHistory.some((message) => message.role === "user") && (
          <div className={`${styles.chatMessage} ${styles.userMessage}`}>
            {userMessage}
          </div>
        )}
      </div>

      {/* Input area */}
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Question/Request"
          value={userMessage}
          onChange={handleInputChange}
          onKeyPress={handleEnterKeyPress}
          className={styles.inputBox}
        />
        <button onClick={handleSendButtonClick} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

export default BardChatBot;
