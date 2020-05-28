import React from 'react'
import PropTypes from 'prop-types'
import './buttonLink.css'

const ButtonLink = props => (
  <div>
    <form
      target='_blank'
      rel='noopener noreferrer'
      action={props.link}
    >
        <button type="submit">
        <span className='buttonText'>
            {props.text}
        </span>
        </button>
    </form>
  </div>
)

ButtonLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string
}

export default ButtonLink