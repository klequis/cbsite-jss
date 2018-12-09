import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'

const ParagraphWrapper = ({ children, classes }) => {
  return (
    <div className={classes.wrapper}>
      {children}
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      // padding: '0 15%'
    }

    // padding: '0 2rem',
    // [theme.breakpoints.up('md')]: {
    //   padding: '0 11rem',
    // }
    // maxWidth: '50%',
  }
})

export default injectSheet(styles)(ParagraphWrapper)