import React from 'react'
import { compose } from 'recompose'
import ResponsiveImage from 'ui/ResponsiveImage'
import injectSheet from 'react-jss'
import withBreakpoint from 'ui/withBreakpoint'


const shadowStyle = {
  boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.075)',
}

const Section = (props) => {

  const {
    breakpoint,
    children,
    classes,
    image,
    imageSide='left',
    shadow
  } = props

  const side = (breakpoint === 'xs' || breakpoint === 'sm') ? 'right' : imageSide
  console.log('side', side);

  if (side === 'left') {
    return (
      <div
        className={classes.wrapper}
        elevation={0}
        style={shadow ? shadowStyle : {}}
      >
        <div className={classes.imageSideStyle}>
          <ResponsiveImage src={image} alt='carl teaching' />
        </div>
        <div className={classes.textSideStyle}>
          {children}
        </div>
      </div>
    )
  }
  return (
    <section
      className={classes.wrapper}
      elevation={0}
      style={shadow ? shadowStyle : {}}
    >
      <div className={classes.textSideStyle}>
        {children}
      </div>
      <div className={classes.imageSideStyle}>
        <ResponsiveImage src={image} alt='carl teaching' />
      </div>
    </section>
  )
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: 8,
    minHeight: 100,
    backgroundColor: 'transparent',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    }
  },
  imageSideStyle: {
    // flexBasis: '33.333333%',
    flexBasis: '45%',
    // backgroundColor: 'orange',
    paddingTop: 8,
    paddingBottom: 8,
    display: 'flex',
    alignItems: 'center',
  },
  textSideStyle: {
    // flexBasis: '66.666666%',
    // backgroundColor: 'purple',
    flexBasis: '55%',
    padding: '4rem 4rem 2rem 4rem',
    margin: '0 auto',
    flexShrink: 1,
    alignSelf: 'center',
    maxWidth: '64rem',
    textAlign: 'left',
  },

})

export default compose(
  withBreakpoint,
  injectSheet(styles)
)(Section)