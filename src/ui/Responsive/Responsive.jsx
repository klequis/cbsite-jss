import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
// import Section from 'ui/Section'
import iResponsive from 'media/new/responsive.svg'
import ResponsiveImage from 'ui/ResponsiveImage'
import withBreakpoint from 'ui/withBreakpoint'

const image = (
  <ResponsiveImage  src={iResponsive} alt='responsive site on multi form factors' />
)
const text = (
<div>
  <Text variant='h2'>Responsive Web Apps</Text>
  <Text variant='subtitle2'>A responsive Web Developer</Text>
  <Text variant='subtitle2'> Using responsive CSS</Text>
  <Text variant='subtitle2'>To make responsive Web Apps</Text>
</div>
)

const Responsive = ({ classes, breakpoint }) => {

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
          <div className={classes.textSide}>
            { text }
          </div>
          <div className={classes.imageSide}>
            { image }
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
    backgroundColor: 'rgb(230, 230, 230)',
    flexBasis: '45%',
    // padding: '0 30px',
    padding: '0 50px',
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
)(Responsive)