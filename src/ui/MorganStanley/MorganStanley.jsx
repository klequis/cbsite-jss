import React from 'react'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import { compose } from 'recompose'
import ResponsiveImage from 'ui/ResponsiveImage'
// import iMS from 'media/new/morgan-stanley.white.01.01.png'
import iMS from 'media/ms01-narrow.png'
import withBreakpoint from 'ui/withBreakpoint'
import Section from 'ui/Section'

const image = (
  <ResponsiveImage src={iMS} alt='logo' />
)

const title = (
  <Text variant='h2'>Morgan Stanley</Text>
)

const body = (
  <div>
    <Text variant='body1'>My first role at Morgan Stanley was creating automated spreadsheet models. I worked with a wide variety of financial data and developed a query and reporting engine that worked against Sybase databases. Over a period of 14 years I filled the roles of software developer, team lead, development manager, project manager and product manager.</Text>
    <Text variant='body1' marginBottom={false}>Applications I worked on concerned CRM, Knowledge Management, Document Management, Banker & Analyst Productivity, reducing information overload, Firmwide Branding and Pitchbook automation. I have often been called 'the grand-father of pitchbook automation', although dropping the 'grand' would be fine with me. </Text>
  </div>
)

const MorganStanley = ({ classes, breakpoint }) => {

  const small = (breakpoint === 'xs' || breakpoint === 'sm')

  return small
    ? (
        <Section className={classes.wrapper}>
          <div className={classes.text}>
            <span>{title}</span>
            <span>{body}</span>
          </div>

        </Section>
      )
    : (
        <section className={classes.wrapper}>
          <div className={classes.image}>
            {image}
          </div>
          <div className={classes.text}>
            {title}
          </div>
        </section>
      )
}

const styles = theme => ({
  wrapper: {

    // boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.075)',
    // display: 'flex',
    // flexDirection: 'column',
    // backgroundColor: 'transparent',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  },
  image: {


    // padding: '0 100px',
    maxWidth: 100,

    // flexBasis: '45%',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    // [theme.breakpoints.up('md')]: {
      // backgroundColor: '#112951',
    // }
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
)(MorganStanley)