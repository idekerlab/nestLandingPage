import React from 'react';
import PropTypes from 'prop-types';

import styles from './componentStyles/verticalTitle.module.css';

const VerticalTitle = (props) => (
  <h1>
    <span className={styles.title}>{props.title}</span>
    <span className={styles.subtitle}>{props.subtitle}</span>
  </h1>
);

VerticalTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default VerticalTitle;
