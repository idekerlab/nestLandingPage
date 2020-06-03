import PropTypes from 'prop-types';
import React from 'react';
import './componentStyles/ccmiHeader.css';
import ccmi from '../images/ccmi.png';

const CcmiHeader = ({ siteTitle }) => (
  <header id='ccmiHeader'>
    <a href='https://ccmi.org/' target='_blank' rel='noopener noreferrer'>
      <img src={ccmi} alt='CCMI Logo' id='ccmiLogo' />
    </a>
    <span id='ccmiHeaderContent'>
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
    </span>
  </header>
);

CcmiHeader.propTypes = {
  siteTitle: PropTypes.string,
};

CcmiHeader.defaultProps = {
  siteTitle: ``,
};

export default CcmiHeader;
