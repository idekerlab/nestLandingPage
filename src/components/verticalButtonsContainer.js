import React from 'react';
import styles from './componentStyles/verticalButtonsContainer.module.css';

const VerticalButtonsContainer = ({ topOffset, children }) => (
  <div className={styles.container} style={{ top: topOffset }}>
    {children}
  </div>
);

export default VerticalButtonsContainer;
