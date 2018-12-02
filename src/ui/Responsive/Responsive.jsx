import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
// import Section from 'ui/Section'
import iResponsive from 'media/new/responsive.svg'
import ResponsiveImage from 'ui/ResponsiveImage'
import withBreakpoint from 'ui/withBreakpoint'
import Section from 'ui/Section'

const image = (
  <ResponsiveImage  src={iResponsive} alt='responsive site on multi form factors' />
)
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
            { image }
          </div>
        </Section>
      )
    : (
        <section className={classes.wrapper}>
          <div className={classes.image}>
            { image }
          </div>
          <div className={classes.text}>
            { text }
          </div>
        </section>
      )
}


const styles = theme => ({
  wrapper: {



    // backgroundColor: 'transparent',
    // display: 'flex',
    // flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    }
  },
  image: {
    // padding: '0 50px',
    // flexBasis: '45%',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'rgb(230, 230, 230)',
    // paddingBottom: '3rem',
  },
  text: {
    // backgroundColor: 'purple',

    // padding: '0 4rem 0 4rem',
    // flexBasis: '55%',
  },
})

export default compose(
  withBreakpoint,
  injectSheet(styles)
)(Responsive)