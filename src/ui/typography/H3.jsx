import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const H3 = ({ children, classes }) => {
  return (
    <h3
      // align={align ? align : 'left'}
      className={classNames([classes.common, classes.font])}
    >
      {children}
    </h3>
  )
}

const styles = theme => {

  const common = theme.typography.common
  console.log('common', common)
  const xsFontSize = theme.typography.xs.h3.fontSize
  console.log('xsFontSize', xsFontSize)
  const mdFontSize = theme.typography.md.h3.fontSize
  console.log('mdFontSize', mdFontSize)
  return ({
    common,
    font: {
      fontSize: xsFontSize,
      [theme.breakpoints.up('md')]: {
        fontSize: mdFontSize,
      }
    }
  })
}

export default injectSheet(styles)(H3)