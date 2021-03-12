import React from 'react';
import PropTypes from 'prop-types';

import styles from './componentStyles/buttonLink.module.css';

const ButtonLink = (props) => (
  <div className={props.tooltip ? styles.tooltip : ''}>
    <a
      href={props.link}
      target='_blank'
      rel='noopener noreferrer'
      className={styles.noUnderline}
    >
      <div
        className={[
          styles.button,
          props.vertical ? styles.vertical : styles.horizontal,
          props.backgroundImage ? styles[props.backgroundImage] : '',
        ].join(' ')}
      >
        <div className={styles.backgroundLayer}>{props.text}</div>
      </div>
    </a>
    <span
      className={[
        styles.tooltipText,
        props.tooltipPosition === 'top' ? styles.top : styles.bottom,
      ].join(' ')}
    >
      {props.tooltipText}
    </span>
    <span
      className={[
        styles.tooltipConnector,
        props.tooltipPosition === 'top' ? styles.top : styles.bottom,
      ].join(' ')}
    />
  </div>
);

ButtonLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  vertical: PropTypes.bool,
  tooltip: PropTypes.bool,
  tooltipText: PropTypes.node,
  tooltipPosition: PropTypes.string,
};

ButtonLink.defaultProps = {
  vertical: true,
  tooltip: false,
};

export default ButtonLink;
