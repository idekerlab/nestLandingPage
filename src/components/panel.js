import React from 'react';
import './componentStyles/panel.css';
import PropTypes from 'prop-types';

const Panel = (props) => (
  <div
    id='panel'
    style={{ backgroundColor: props.backgroundColor, color: props.textColor }}
  >
    {props.children}
  </div>
);

Panel.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Panel;
