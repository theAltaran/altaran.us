import React from 'react';
import styles from './footer.module.css';
import { CFooter } from '@coreui/react'
// import { CLink } from '@coreui/react';



const Footer = () => (
  <div className={styles.Footer}>
  <CFooter>
  <div>
  <img src="favicon.png" alt="alt" />
    <span> &copy; 2022 theAltaran.  <img src="favicon.png" alt="alt" />     
      </span>
  </div>
  </CFooter>
  </div>
);


export default Footer;
