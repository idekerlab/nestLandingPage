import React from 'react';
import PropTypes from 'prop-types';
import './componentStyles/buttonLink.css';

const ButtonLink = (props) => (
  <div id={props.tooltip ? 'tooltip' : ''}>
    <form target='_blank' rel='noopener noreferrer' action={props.link}>
      <button type='submit'>
        <span id='buttonText'>{props.text}</span>
      </button>
    </form>
    <span id='tooltipText' className={props.tooltipPosition}>
      {props.tooltipText}
    </span>
    <span id='tooltipConnector' className={props.tooltipPosition} />
  </div>
);

ButtonLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  tooltip: PropTypes.bool,
  tooltipText: PropTypes.node,
  tooltipPosition: PropTypes.string,
};

export default ButtonLink;
