import React from 'react'
import injectSheet from 'react-jss'
import Text from 'components/Text'

const ThePast = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <Text
        variant='h2'
        marginBottom={false}
        className={classes.title}
      >
        Things From The Past
      </Text>
    </div>
  )
}

const styles = theme => ({
  title: {
    color: 'white',
    padding: '3em 0'
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.075)',
    backgroundColor: '#0072CE',
  },
})

export default injectSheet(styles)(ThePast)