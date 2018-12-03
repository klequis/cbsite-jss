import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import ResponsiveImage from 'ui/ResponsiveImage'
import withBreakpoint from 'ui/withBreakpoint'
import iTR from 'media/tr.jpg'
import Section from 'ui/Section'


const title = (
  <div>
    <Text variant='h2'>Thomson Reuters</Text>
  </div>
)

const body = (
  <div>
    <Text variant='body1' marginBottom={false}>I was at Thomson Reuters for 3 years as a Product Manager where I worked with clients at Deutsche Bank, Morgan Stanley, Credit Suisse, Nomura, and Rothschild to develop Thomson Reuters MS Excel to MS PowerPoint linking application which enabled users to use Excel data & graphs with linked data in PowerPoint presentations. Although there is a Microsoft Office native equivalent, we were able to develop a product that was more stable and a feature set more tailored to our clients.</Text>
  </div>
)

const ThomsonReuters = ({ classes, breakpoint }) => {

  const small = (breakpoint === 'xs' || breakpoint === 'sm')

  return small
    ? (
        <Section className={classes.wrapper}>
          <div className={classes.text}>
            <span>{ title }</span>
            <span>{ body }</span>
          </div>
        </Section>
      )
    : (
        <Section className={classes.wrapper}>
          <div className={classes.text}>
            { title }
            { body }
          </div>
          <div className={classes.image}>
            <ResponsiveImage src={iTR} alt='logo' />
          </div>

        </Section>
      )
}

const styles = theme => ({
  wrapper: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  logo: {
    maxWidth: 200,
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'green',
      flexBasis: '50%',
      flexShrink: 0,
      // flexGrow: 1,
    }
  },
  image: {
  },
  text: {
    padding: '0 2rem',
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'blue',
      padding: 0,
      flexBasis: '50%',
      // flexGrow: 1,
      flexShrink: 0,
    }
  },
})

export default compose(
  withBreakpoint,
  injectSheet(styles)
)(ThomsonReuters)