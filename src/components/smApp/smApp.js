import React from 'react';
import styles from './smApp.module.css';
import IframeResizer from 'iframe-resizer-react';

const SmApp = () => (
  <div className={styles.SmApp}>
    <IframeResizer className={styles.iframe1}  src='https://sm-app-client-mtto.vercel.app/' style={{ width: '1px', minWidth: '100%'}}></IframeResizer>
  </div>
);



export default SmApp;
