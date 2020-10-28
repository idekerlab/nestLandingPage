import React from 'react';
import PropTypes from 'prop-types';

import styles from './componentStyles/buttonLink.module.css';

const ButtonLink = (props) => (
  <div className={props.tooltip ? styles.tooltip : ''}>
    <form
      target='_blank'
      rel='noopener noreferrer'
      action={props.link}
      className={props.vertical ? styles.vertical : styles.horizontal}
    >
      <button
        type='submit'
        className={
          props.backgroundImage
            ? [styles.button, styles[props.backgroundImage]].join(' ')
            : styles.button
        }
      >
        <div className={styles.backgroundLayer}>{props.text}</div>
      </button>
    </form>
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
