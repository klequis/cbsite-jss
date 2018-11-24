import React from 'react'
import injectSheet from 'react-jss'

const H3 = ({ children, classes }) => {
  return (
    <h3
      // align={align ? align : 'left'}
      className={classes.font}
    >

      {children}

    </h3>
  )
}


const styles = {
  font: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
    '@media screen and (max-width: 360px)': {
      textAlign: 'left',
    },
  }
}

export default injectSheet(styles)(H3)