import React from 'react'
import injectSheet from 'react-jss'

const HTest = ({ children, classes }) => {
  console.log('classes', classes)
  return (
    <h1
      variant='h1'
      align='left'
      className={classes.font}

    >

      {children}

    </h1>
  )
}

const styles = {
  font: {
    fontSize: '100%',
    // marginBottom: '1rem',
    // '@media screen and (max-width: 736px)': {
    //   fontSize: '2.5rem',
    // }


  }
}

export default injectSheet(styles)(HTest)