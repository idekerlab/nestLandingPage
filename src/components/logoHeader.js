import React from 'react';
import PropTypes from 'prop-types';

import ccmi from '../images/ccmi.png';
import styles from './componentStyles/logoHeader.module.css';

const LogoHeader = ({ siteTitle }) => (
  <header className={styles.header}>
    <a href='https://ccmi.org/' target='_blank' rel='noopener noreferrer'>
      <img src={ccmi} alt='CCMI Logo' className={styles.logo} />
    </a>
    <span className={styles.content}>
      <a
        className={styles.underlineLink}
        href='https://medschool.ucsd.edu/Pages/default.aspx'
        target='_blank'
        rel='noopener noreferrer'
      >
        UC San Diego
      </a>
      <a
        className={styles.noUnderlineLink}
        href='https://idekerlab.ucsd.edu'
        target='_blank'
        rel='noopener noreferrer'
      >
        {' - '}
      </a>
      <a
        className={styles.underlineLink}
        href='https://idekerlab.ucsd.edu'
        target='_blank'
        rel='noopener noreferrer'
      >
        Ideker Lab
      </a>
    </span>
  </header>
);

LogoHeader.propTypes = {
  siteTitle: PropTypes.string,
};

LogoHeader.defaultProps = {
  siteTitle: ``,
};

export default LogoHeader;
