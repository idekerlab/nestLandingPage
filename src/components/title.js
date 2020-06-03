import React from 'react';
import PropTypes from 'prop-types';
import './componentStyles/title.css';

const Title = (props) => (
  <h1>
    <span id='title'>{props.title}</span>
    <span id='subtitle'>{props.subtitle}</span>
  </h1>
);

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Title;
