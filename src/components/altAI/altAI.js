import React from "react";
import BobChatbot from "../bobBot/bobChatbot";
import BobsNews from "../bobsnews/bobsnews"; // Import the BobsNews component
import styles from "./altAI.module.css";
import BardChatBot from "../bardChatBot/bardChatBot";

const AltAI = () => {
  const [conversationHistory] = React.useState([]);

  return (
    <div className={styles.container}>
      {/* Site Title */}
      <div className={styles.titleContainer}>
        <div className={`${styles.title} ${styles.customTitle}`}>alt's ai bots</div>
      </div>

      {/* Chatbots */}
      <div className={styles.chatContainer}>
        <div className={`${styles.chatbot} ${styles.bardChatBot}`}>
          <BardChatBot conversationHistory={conversationHistory} />
        </div>
        <div className={`${styles.chatbot} ${styles.bobChatbot}`}>
          <BobChatbot conversationHistory={conversationHistory} />
        </div>

        {/* BobsNews component */}
        <div className={`${styles.chatbot} ${styles.bobsNewsChatBot}`}>
          <BobsNews />
        </div>
      </div>
    </div>
  );
};

export default AltAI;
