import React from 'react'
import injectSheet from 'react-jss'

const St1 = ({ children, classes }) => {
  return (
    <p
      // align='center'
      className={classes.font}
    >
      {children}
    </p>
  )
}


const styles = theme => ({
  font: {
    fontSize: '1.375rem',
    lineHeight: 'inherit',
    fontStyle: 'italic',
    marginTop: '-0.65rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
    }
  },
})

export default injectSheet(styles)(St1)