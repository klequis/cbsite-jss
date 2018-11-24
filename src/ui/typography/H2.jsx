import React from 'react'
import injectSheet from 'react-jss'

const H2 = ({ children, classes }) => {
  return (
    <h2
      // align={align ? align : 'left'}
      className={classes.font}
    >

      {children}

    </h2>
  )
}


const styles = theme => ({
  font: {
    fontSize: '2.25rem',
    marginBottom: '1rem',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
    }
  }
})

export default injectSheet(styles)(H2)