import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
// import classNames from 'classnames'

const ResponsiveImage = ({ alt, classes, src, className }) => {
  // const cls = classNames(classes.imgFluid, className)
  // className={cls}
  return (
    <div className={classes.wrapper}>
    <img src={src} alt={alt}  className={classes.imgFluid}/>
    </div>
  )
}

const styles = {
  wrapper: {
    backgroundColor: 'red', //tmp
    paddingRight: '20%',
    paddingLeft: '20%',
  },
  imgFluid: {
    display: 'block',
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
}

export default injectSheet(styles)(ResponsiveImage)

ResponsiveImage.propTypes = {
  alt: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}