import React from 'react'
import injectSheet from 'react-jss'

const St2 = ({ children, classes }) => {
  return (
    <p
      // variant='body1'
      // align='center'
      className={classes.font}
    >

      {children}

    </p>
  )
}


const styles = theme => ({
  font: {
    fontSize: '1.1rem',
    lineHeight: 1.65,
    fontStyle: 'italic',
    marginTop: '-0.65rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
    }
  }
})

export default injectSheet(styles)(St2)