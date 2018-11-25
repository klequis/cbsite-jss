import React from 'react'
import injectSheet from 'react-jss'

const H4 = ({ children, classes }) => {
  return (
    <h4
      // align='center'
      className={classes.font}
    >
      {children}
    </h4>
  )
}

const styles = theme => ({
  font: {
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.1rem',
    },
    marginBottom: '1rem',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
    }
  }
})

export default injectSheet(styles)(H4)