import React from 'react'
import PropTypes from 'prop-types'

const variants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'subheading1',
  'subheading2',
  'subheading3',
  'body'
]

const unknown = {
  color: 'red',
  fontWeight: 'bold',
}

const HTest = ({ variant }) => {
  const Component = variant
  if (!variants.includes(variant)) {
    return <p style={unknown}>unknow variant</p>
  }
  return (
    <Component>HTest</Component>
  )
}

export default HTest

HTest.propTypes = {
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'subheading1',
    'subheading2',
    'subheading3',
    'body'
  ]),

}