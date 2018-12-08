import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import ResponsiveImage from 'ui/ResponsiveImage'
import withBreakpoint from 'ui/withBreakpoint'
import iCacf from 'media/logos/cacf.png'
import Section from 'ui/Section'

const text = (
  <div>
    <Text variant='h2' align='center'>Coalition for Asian American Children & Families</Text>
    <Text variant='subtitle2' align='center'>Former Board Member</Text>
  </div>
)

const CACF = ({ classes, breakpoint }) => {

  return (
    <Section className={classes.wrapper}>
      <div className={classes.text}>
        { text }
      </div>
      <div className={classes.image}>
        <ResponsiveImage  src={iCacf} className={classes.logo} alt='responsive site on multi form factors' />
      </div>
    </Section>
  )
}

const styles = theme => ({
  logo: {
    maxWidth: '15rem',
    [theme.breakpoints.up('md')]: {
      maxWidth: '20rem',
    }
  },
  wrapper: {
    // [theme.breakpoints.up('md')]: {
    //   display: 'flex',
    // },
  },
  image: {
    // [theme.breakpoints.up('md')]: {
    //   backgroundColor: 'green',
    //   flexBasis: '50%',
    // }
  },
  text: {
    // [theme.breakpoints.up('md')]: {
    //   backgroundColor: 'blue',
    //   padding: 0,
    //   flexBasis: '50%',
    // }
  },
})

export default compose(
  withBreakpoint,
  injectSheet(styles)
)(CACF)




















