import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const H4 = ({ children, classes }) => {
  return (
    <h4
      // align='center'
      className={classNames([classes.common, classes.font])}
    >
      {children}
    </h4>
  )
}

const styles = theme => {

  const common = theme.typography.headings.common
  const xs = theme.typography.headings.xs.h4
  const md = theme.typography.headings.md.h4
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

export default injectSheet(styles)(H4)