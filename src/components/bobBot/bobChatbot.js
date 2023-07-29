import React, { useState, useEffect } from "react";
import styles from "../altAI/altAI.module.css"; // Import the combined CSS module

const BobChatbot = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const initialSystemMessage =
    "Your name is bob. You are an assistant on the site 'altaran.us'. If anyone messages 'test', respond with just 'i am out of soup' and be helpful with any other prompt."; // Set the initial system message here

  useEffect(() => {
    // Set the initial chat history with the user's first message as an empty string
    setChatHistory([
      { role: "system", content: initialSystemMessage },
      { role: "user", content: userMessage },
    ]);
  }, [userMessage]);

  const handleSendMessage = async (message) => {
    setIsLoading(true);

    try {
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY; // Fetch API key each time
      if (!apiKey) {
        console.error("OpenAI API key is missing. Make sure to set REACT_APP_OPENAI_API_KEY in your .env file.");
        return;
      }

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            ...chatHistory,
            { role: "user", content: message },
            { role: "assistant", content: "..." }, // Show loading while waiting for the response
          ],
          temperature: 0.7
        }),
      });

      const data = await response.json();
      setIsLoading(false);

      if (data.choices && data.choices[0] && data.choices[0].message) {
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { role: "user", content: message },
          { role: "assistant", content: data.choices[0].message.content },
        ]);
      } else {
        console.error("No valid response received from the OpenAI API.");
      }
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
      handleSendMessage(userMessage); // Pass the user message to the handleSendMessage function
    }
  };

  const handleSendButtonClick = () => {
    handleSendMessage(userMessage); // Pass the user message to the handleSendMessage function
  };

  // Exclude the initial system message from rendering in the chat
  const chatHistoryWithoutSystem = chatHistory.filter((message) => message.role !== "system");

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
        {/* Display chat history, including the current user typing message */}
        {chatHistoryWithoutSystem.map((message, index) => (
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

export default BobChatbot;
