import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const H2 = ({ children, classes }) => {
  return (
    <h2
      // align={align ? align : 'left'}
      className={classNames([classes.common, classes.font])}
    >
      {children}
    </h2>
  )
}

const styles = theme => {

  const common = theme.typography.headings.common
  const xs = theme.typography.headings.xs.h2
  const md = theme.typography.headings.md.h2
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

export default injectSheet(styles)(H2)