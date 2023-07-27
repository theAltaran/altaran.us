import React, { useState } from "react";
import openai from "openai";
import styles from "./bobChatbot.module.css"; // Import the CSS module

const BobChatbot = ({ conversationHistory }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseContent, setResponseContent] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleSendMessage = async () => {
    setIsLoading(true);

    // Include the last two entries in the conversation history in the user message
    // If you need to use conversationHistory elsewhere, you can still keep it here, but it's not being used in this component.
    const lastTwoMessages = conversationHistory.slice(-2);
    const userMessages = lastTwoMessages.map((msg) => ({ role: "user", content: msg.question }));

    // Add the current user question to the user messages
    userMessages.push({ role: "user", content: userMessage });

    try {
      // Make the OpenAI API call using your environment variable
      openai.api_key = process.env.REACT_APP_OPENAI_API_KEY;

      // Your OpenAI API call here, similar to the Python code, but using the JavaScript library
      const response = await openai.ChatCompletion.create({
        model: "gpt-3.5-turbo",
        messages: [...userMessages],
        temperature: 1.0,
        max_tokens: 250,
      });

      // Process the response and update state accordingly
      setResponseContent(response.data.choices[0].message.content);
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
        {conversationHistory.map((msg, index) => (
          <div
            key={index}
            className={`${styles.chatMessage} ${msg.role === "user" ? styles.userMessage : styles.botMessage}`}
          >
            {msg.question}
          </div>
        ))}
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
