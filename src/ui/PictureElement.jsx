import React from 'react'
import injectSheet from 'react-jss'
import { breakpoints } from 'ui/breakpoints'

const PictureElement = ({ classes, images }) => {
  console.log(breakpoints)
  return (
    <div id='PictureElement-wrapper' className={classes.wrapper}>
      <picture>
      <source srcSet={images[0]} media={`(min-width: ${breakpoints.sm}px)`} />
        <source srcSet={images[1]} media={`(min-width: ${breakpoints.md}px)`} />
        <source srcSet={images[2]} media={`(min-width: ${breakpoints.lg}px)`} />
        <img srcSet={images[2]} className={classes.fluid} alt="MDN" />
      </picture>
    </div>
  )
}

/*

<source srcSet={images[0]} media={`(min-width: ${breakpoints.sm}px)`} />
        <source srcSet={images[1]} media={`(min-width: ${breakpoints.md}px)`} />
        <source srcSet={images[2]} media={`(min-width: ${breakpoints.lg}px)`} />
        <img srcSet={images[2]} className={classes.fluid} alt="MDN" />

*/

const styles = theme => ({
  wrapper: {
    // width: '100%',
    // height: '100%',
    // width: 300,
    backgroundColor: 'orange',
  },
  fluid: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    // height: '100%',

  },
})

export default injectSheet(styles)(PictureElement)