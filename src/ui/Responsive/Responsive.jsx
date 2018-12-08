import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
// import Section from 'ui/Section'
import iResponsive from 'media/responsive.svg'
import ResponsiveImage from 'ui/ResponsiveImage'
import withBreakpoint from 'ui/withBreakpoint'
import Section from 'ui/Section'


const text = (
<div>
  <Text variant='h2' align='center'>Responsive Web Apps</Text>
  <Text variant='subtitle2' align='center'>Responsive Web Developer</Text>
  <Text variant='subtitle2' align='center'> Responsive CSS</Text>
  <Text variant='subtitle2' align='center'>Responsive Web Apps</Text>
</div>
)

const Responsive = ({ classes, breakpoint }) => {

  return (
    <Section className={classes.wrapper} background='dark'>
      <div className={classes.text}>
        { text }
      </div>
      <div className={classes.image}>
        <ResponsiveImage  src={iResponsive} className={classes.img} alt='responsive site on multi form factors' />
      </div>
    </Section>
  )
}


const styles = theme => ({
  img: {
    maxWidth: 550,
  },
  wrapper: {
    /// backgroundColor: '#303030',
    // backgroundColor: '#2b3137',
    color: 'white',
    // [theme.breakpoints.up('md')]: {
    //   display: 'flex',
    // },
  },
  image: {
    padding: '1rem 1rem 0 1rem',
    [theme.breakpoints.up('lg')]: {
      marginTop: 60,
    }
    // [theme.breakpoints.up('md')]: {
    //   backgroundColor: 'green', //tmp
    //   padding: 0,
    //   flexBasis: '50%',
    //   display: 'flex',
    //   alignItems: 'center',
    // },
  },
  text: {

    // [theme.breakpoints.up('md')]: {
    //   backgroundColor: 'blue', //tmp
    //   flexBasis: '50%',
    //   display: 'flex',
    //   justifyContent: 'center',
    // },
  },
})

export default compose(
  withBreakpoint,
  injectSheet(styles)
)(Responsive)