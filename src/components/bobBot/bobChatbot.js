import React, { useState } from "react";
import styles from "../altAI/altAI.module.css"; // Import the combined CSS module

const BobChatbot = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
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
          messages: [...messages, { role: "user", content: userMessage }],
          temperature: 0.7
        }),
      });

      const data = await response.json();
      setMessages([...messages, { role: "user", content: userMessage }, { role: "bot", content: data.choices[0].message.content }]);
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
      <h1>Bob</h1>

      {/* Render the bob.png image */}
      <div className={styles.ImageContainer}>
        <img src="/bob.png" alt="Bob" className={styles.botImage} />
      </div>

      {/* Chat messages */}
      <div className={styles.chatMessages}>
        {/* Display all messages */}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.chatMessage} ${message.role === "user" ? styles.userMessage : styles.botMessage}`}
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
      </div>

      {/* Input area */}
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="I like potatoes."
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

export default BobChatbot;
