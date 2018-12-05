import React from 'react'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import { compose } from 'recompose'
import ResponsiveImage from 'ui/ResponsiveImage'
// import iMS from 'media/morgan-stanley.white.01.01.png'
import iMS from 'media/ms01-narrow.png'
import withBreakpoint from 'ui/withBreakpoint'
import Section from 'ui/Section'

const image = (
  <ResponsiveImage src={iMS} alt='logo' />
)

const title = (
  <Text variant='h2' align='center'>Morgan Stanley</Text>
)

const body = (
  <div>
    <Text variant='body1'>My first role at Morgan Stanley was creating automated spreadsheet models. I worked with a wide variety of financial data and developed a query and reporting engine that worked against Sybase databases. Over a period of 14 years I filled the roles of software developer, team lead, development manager, project manager and product manager.</Text>
    <Text variant='body1' marginBottom={false}>Applications I worked on concerned CRM, Knowledge Management, Document Management, Banker & Analyst Productivity, reducing information overload, Firmwide Branding and Pitchbook automation. I have often been called 'the grand-father of pitchbook automation', although dropping the 'grand' would be fine with me. </Text>
  </div>
)

const MorganStanley = ({ classes, breakpoint }) => {
  return (
    <Section className={classes.wrapper}>
      <div className={classes.text}>
        <span>{title}</span>
        <span>{body}</span>
      </div>

    </Section>
  )
}

const styles = theme => ({
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
    padding: '0 2rem',
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
)(MorganStanley)