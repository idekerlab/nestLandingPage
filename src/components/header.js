import React from 'react';
import PropTypes from 'prop-types';

import styles from './componentStyles/header.module.css';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1 className={styles.content}>
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
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
