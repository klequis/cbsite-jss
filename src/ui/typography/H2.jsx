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
  const common = theme.typography.common
  const xsFontSize = theme.typography.xs.h2.fontSize
  const mdFontSize = theme.typography.md.h2.fontSize
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

export default injectSheet(styles)(H2)