import React from 'react'
import injectSheet from 'react-jss'

const H1 = ({ children, classes}) => {
  console.log('classes', classes)
  return (
    <h1
      // align={align ? align : 'left'}
      className={classes.font}
    >
      {children}
    </h1>
  )
}

const styles = theme => {
  return ({
    font: {
      fontSize: '3.5rem',
      marginBottom: '1rem',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        textAlign: 'left',
      }
    }
  })
}

export default injectSheet(styles)(H1)