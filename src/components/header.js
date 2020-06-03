import PropTypes from 'prop-types';
import React from 'react';
import './componentStyles/header.css';

const Header = ({ siteTitle }) => (
  <header id='header'>
    <div id='headerDiv'>
      <h1 id='headerContent'>
        <a
          id='ucsdLink'
          className='externalLink'
          href='https://medschool.ucsd.edu/Pages/default.aspx'
          target='_blank'
          rel='noopener noreferrer'
        >
          UC San Diego
        </a>
        <a
          id='hyphenLink'
          className='externalLink'
          href='http://idekerlab.ucsd.edu'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' - '}
        </a>
        <a
          id='idekerLink'
          className='externalLink'
          href='http://idekerlab.ucsd.edu'
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
