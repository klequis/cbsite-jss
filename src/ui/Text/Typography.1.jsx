import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
// import classNames from 'classnames'
import withTheme from 'ui/withTheme'


const variants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'something1',
  'something1',
  'something3',
  'body'
]

const unknown = {
  color: 'red',
  fontWeight: 'bold',
}

const Typography = ({ children, classes, theme, variant }) => {
  // console.log('Typography: variant', variant)
  // console.log('Typography: clases', classes)
  // console.log('Typography: classes[variant]', classes[variant])
  const Component = variant || 'p'
  if (!variants.includes(variant)) {
    return <p style={unknown}>unknow variant</p>
  }
  return (
    <Component
      // align={align ? align : 'left'}
      className={classes[variant]}
    >
      {children}
    </Component>
  )
}

const styles = theme => {

  const xs = theme.typography.headings.xs
  const md = theme.typography.headings.md

  return ({
    h1: xs.h1,
    h2: xs.h2,
    h3: xs.h3,
    h4: xs.h4,
    something1: xs.something1,
    something2: xs.something2,
    something3: xs.something3,
    [theme.breakpoints.up('md')]: {
      h1: md.h1,
      h2: md.h2,
      h3: md.h3,
      h4: md.h4,
    },

  })
}

export default compose(
  withTheme,
  injectSheet(styles)
)(Typography)

Typography.propTypes = {
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'something1',
    'something',
    'something',
    'body'
  ]),

}