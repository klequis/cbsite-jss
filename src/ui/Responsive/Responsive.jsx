import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
// import Section from 'ui/Section'
import iResponsive from 'media/new/responsive.svg'
import ResponsiveImage from 'ui/ResponsiveImage'
import withBreakpoint from 'ui/withBreakpoint'
import Section from 'ui/Section'


const text = (
<div>
  <Text variant='h2'>Responsive Web Apps</Text>
  <Text variant='subtitle2'>Responsive Web Developer</Text>
  <Text variant='subtitle2'> Responsive CSS</Text>
  <Text variant='subtitle2'>Responsive Web Apps</Text>
</div>
)

const Responsive = ({ classes, breakpoint }) => {

  const small = (breakpoint === 'xs' || breakpoint === 'sm')

  return small
    ? (
        <Section>
          <div className={classes.text}>
            { text }
          </div>
          <div className={classes.image}>
            <ResponsiveImage  src={iResponsive} className={classes.img} alt='responsive site on multi form factors' />
          </div>
        </Section>
      )
    : (
        <Section className={classes.wrapper}>
          <div className={classes.image}>
            <ResponsiveImage  src={iResponsive} className={classes.img} alt='responsive site on multi form factors' />
          </div>
          <div className={classes.text}>
            { text }
          </div>
        </Section>
      )
}


const styles = theme => ({
  img: {
    maxWidth: 550,
  },
  wrapper: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  image: {
    padding: '0 1rem',
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'green', //tmp
      padding: 0,
      flexBasis: '50%',
      display: 'flex',
      alignItems: 'center',
    },
  },
  text: {

    [theme.breakpoints.up('md')]: {
      backgroundColor: 'blue', //tmp
      flexBasis: '50%',
      display: 'flex',
      justifyContent: 'center',
    },
  },
})

export default compose(
  withBreakpoint,
  injectSheet(styles)
)(Responsive)