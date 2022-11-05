import React from 'react';
import styles from './footer.module.css';
import { CFooter } from '@coreui/react'
import { CLink } from '@coreui/react';

const Footer = () => (
  <div className={styles.Footer}>
  <CFooter>
  <div>
    <span>&copy; 2022 theAltaran.</span>
  </div>
  <div>
    <span>Powered by</span>
    <CLink href="https://tinyurl.com/3ky2awsy">  Beer</CLink>
  </div>
  </CFooter>
  </div>
);


export default Footer;
