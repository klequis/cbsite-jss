import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import ResponsiveImage from 'ui/ResponsiveImage'
import withBreakpoint from 'ui/withBreakpoint'
import iCacf from 'media/new/cacf.png'
import Section from 'ui/Section'

const text = (
  <div>
    <Text variant='h2'>Coalition for Asian American Children & Families</Text>
    <Text variant='subtitle2'>Former Board Member</Text>
    <Text variant='body1'>I served on CACF's board for 3 years.</Text>
  </div>
)

const CACF = ({ classes, breakpoint }) => {

  const small = (breakpoint === 'xs' || breakpoint === 'sm')

  return small
    ? (
        <Section className={classes.wrapper}>
          <div className={classes.text}>
            { text }
          </div>
          <div className={classes.image}>
            <ResponsiveImage  src={iCacf} className={classes.logo} alt='responsive site on multi form factors' />
          </div>
        </Section>
      )
    : (
        <section className={classes.wrapper}>
          <div className={classes.image}>
            <ResponsiveImage  src={iCacf} alt='responsive site on multi form factors' />
          </div>
          <div className={classes.text}>
            { text }
          </div>
        </section>
      )
}


const styles = theme => ({
  logo: {
    maxWidth: 210,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    // boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.075)',
    backgroundColor: 'transparent',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    }
  },
  image: {
    // backgroundColor: 'rgb(230, 230, 230)',
    flexBasis: '45%',
    // padding: '0 30px',
    padding: '0 50px',
    // maxWidth: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    // backgroundColor: 'purple',
    flexBasis: '55%',
    // padding: '4rem 4rem 2rem 4rem',
  },
})

export default compose(
  withBreakpoint,
  injectSheet(styles)
)(CACF)




















