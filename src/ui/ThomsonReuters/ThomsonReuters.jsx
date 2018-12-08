import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import withBreakpoint from 'ui/withBreakpoint'
import Section from 'ui/Section'

const title = (
  <div>
    <Text variant='h2' align='center'>Thomson Reuters</Text>
  </div>
)

const body = (
  <div>
    <Text variant='body1' marginBottom={false}>I was at Thomson Reuters for 3 years as a Product Manager where I worked with clients at Deutsche Bank, Morgan Stanley, Credit Suisse, Nomura, and Rothschild to develop Thomson Reuters MS Excel to MS PowerPoint linking application which enabled users to use Excel data & graphs with linked data in PowerPoint presentations. Although there is a Microsoft Office native equivalent, we were able to develop a product that was more stable and a feature set more tailored to our clients.</Text>
  </div>
)

const ThomsonReuters = ({ classes, breakpoint }) => {

  return (
    <Section>
      <div className={classes.text}>
        <span>{ title }</span>
        <span>{ body }</span>
      </div>
    </Section>
  )
}

const styles = theme => ({
  logo: {
    maxWidth: 200,
  },
  image: {
  },
  text: {
    padding: '0 2rem',
    [theme.breakpoints.up('md')]: {
      padding: '0 11rem',
    }
  },
})

export default compose(
  withBreakpoint,
  injectSheet(styles)
)(ThomsonReuters)