import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const H1 = ({ children, classes}) => {
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

  const common = theme.typography.common
  const xsFontSize = theme.typography.xs.h1.fontSize
  const mdFontSize = theme.typography.md.h1.fontSize
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

console.log('STYLES', styles.theme)

export default injectSheet(styles)(H1)