import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import withTheme from 'ui/withTheme'

const H1 = (props) => {
  const { children, classes} = props
  // console.log('H1: props', props)
  return (
    <h1
      // align={align ? align : 'left'}
      className={classNames([classes.common, classes.font])}
    >
      {children}
    </h1>
  )
}




const styles = theme => {

  const common = theme.typography.headings.common
  const xs = theme.typography.headings.xs.h1
  const md = theme.typography.headings.md.h1
  return ({
    common,
    font: {
      fontSize: xs.fontSize,
      lineHeight: xs.lineHeight,
      [theme.breakpoints.up('md')]: {
        fontSize: md.fontSize,
        lineHeight: md.lineHeight,
      }
    }
  })
}

export default compose(
  withTheme,
  injectSheet(styles)
)(H1)