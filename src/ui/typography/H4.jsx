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


const styles = {
  font: {
    fontSize: '1.1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    '@media screen and (max-width: 360px)': {
      textAlign: 'left',
    },
  }
}

export default injectSheet(styles)(H4)