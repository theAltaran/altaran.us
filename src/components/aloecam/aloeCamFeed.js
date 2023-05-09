import styles from "./aloecam.module.css"



const AloeCamFeed = () => (
    <div className={styles.Aloecam}>
      <br/>
      <br/>
      <br/>
    <h1>Welcome to the home of the aloeCam</h1>
    {/* <h3 className={styles.center}>**5-7-23 Currently making changes to dns.  aloeCam functionality</h3>
    <h3 className={styles.center}>maybe limited for the next 24-48 hours. Thank you for your cooperation**</h3> */}
    <img className={styles.img1} src="https://cam.aloecam.duckdns.org/"alt='aloeCam'></img>
    {/* <img className={styles.img1} src="https://aloecam.duckdns.org:6969"alt='aloeCam'></img>      */}
      
      <br/>
      <br/>
      </div>
      );

      export default AloeCamFeed;
