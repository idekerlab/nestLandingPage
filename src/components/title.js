import React from 'react'
import PropTypes from 'prop-types'
import './componentStyles/title.css'

const Title = props => (
  <div id='titlesDiv'> 
    <h1 id='titleDiv'>
      {props.title}
    </h1>
    <h1 id='subtitleDiv'>
      {props.subtitle}
    </h1>
  </div>
)

Title.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default Title

