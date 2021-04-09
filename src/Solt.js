import React from 'react'
import PropTypes from 'prop-types'

function FancyBorder (props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}

FancyBorder.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.any.isRequired
}

export default function WelcomeDialog () {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  )
}
