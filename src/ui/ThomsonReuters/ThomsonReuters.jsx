import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import ResponsiveImage from 'ui/ResponsiveImage'
import withBreakpoint from 'ui/withBreakpoint'
import iTR from 'media/tr.jpg'

const image = (
  <ResponsiveImage src={iTR} alt='logo' />
)

const text = (
  <div>
    <Text variant='body1'>I was at Thomson Reuters for 3 years as a Product Manager where I worked with clients at Deutsche Bank, Morgan Stanley, Credit Suisse, Nomura, and Rothschild to develop Thomson Reuters MS Excel to MS PowerPoint linking application which enabled users to use Excel data & graphs with linked data PowerPoint presentations. Although there is a native equivalent, we were able to develop a product that was more stable with a feature set more tailored to our clients.</Text>
  </div>
)

const ThomsonReuters = ({ classes, breakpoint }) => {

  const small = (breakpoint === 'xs' || breakpoint === 'sm')

  return small
    ? (
        <section className={classes.wrapper}>
          <div className={classes.textSide}>
            { text }
          </div>
          <div className={classes.imageSide}>
            { image }
          </div>
        </section>
      )
    : (
        <section className={classes.wrapper}>
          <div className={classes.imageSide}>
            { image }
          </div>
          <div className={classes.textSide}>
            { text }
          </div>
        </section>
      )
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.075)',
    backgroundColor: 'transparent',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    }
  },
  imageSide: {
    // backgroundColor: 'red',
    flexBasis: '45%',
    // padding: '0 30px',
    // maxWidth: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSide: {
    // backgroundColor: 'purple',
    flexBasis: '55%',
    padding: '4rem 4rem 2rem 4rem',
  },
})

export default compose(
  withBreakpoint,
  injectSheet(styles)
)(ThomsonReuters)