import React from "react";
import BobChatbot from "../bobBot/bobChatbot";
import styles from "./altAI.module.css"; // Import the CSS module

const App = () => {
  const [conversationHistory] = React.useState([]);

  return (
    <div className={styles.appContainer}>
      {/* <img src="/bob.png" alt="Bob" className={styles.image} /> */}
      <BobChatbot conversationHistory={conversationHistory} />
    </div>
  );
};

export default App;
