import React from "react";
import BobChatbot from "../bobBot/bobChatbot";
import styles from "./altAI.module.css"; // Import the CSS module
import BardChatBot from "../bardChatBot/bardChatBot";

const AltAI = () => {
  const [conversationHistory] = React.useState([]);

  return (
    <div className={styles.appContainer}>
      <BardChatBot conversationHistory={conversationHistory} />
      <BobChatbot conversationHistory={conversationHistory} />
    </div>
  );
};

export default AltAI;
