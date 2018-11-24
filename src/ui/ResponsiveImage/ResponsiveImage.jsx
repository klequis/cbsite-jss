import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
// import classNames from 'classnames'

const styles = {
  imgFluid: {
    display: 'block',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}

const ResponsiveImage = ({ alt, classes, src, className }) => {
  // const cls = classNames(classes.imgFluid, className)
  // className={cls}
  return (

    <img src={src} alt={alt}  className={classes.imgFluid}/>
  )
}
export default injectSheet(styles)(ResponsiveImage)

ResponsiveImage.propTypes = {
  alt: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}