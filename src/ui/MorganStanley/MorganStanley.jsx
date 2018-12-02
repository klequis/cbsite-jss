import React from 'react'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import { compose } from 'recompose'
import ResponsiveImage from 'ui/ResponsiveImage'
import iMS from 'media/new/morgan-stanley.white.01.01.png'
import withBreakpoint from 'ui/withBreakpoint'

const image = (
  <ResponsiveImage src={iMS} alt='logo' />
)

const text = (
  <div>
    <Text variant='h2'>Morgan Stanley</Text>
    <Text variant='body1'>My first role at Morgan Stanley was creating automated spreadsheet models. I worked with a wide variety of financial data and developed a query and reporting engine that worked against Sybase databases. Over a period of 14 years I filled the roles of software developer, team lead, development manager, project manager and product manager.</Text>
    <Text variant='body1'>Applications I worked on concerned CRM, Knowledge Management, Document Management, Banker & Analyst Productivity, reducing information overload, Firmwide Branding and Pitchbook automation. I have often been called 'the grand-father of pitchbook automation', although dropping the 'grand' would be fine with me. </Text>
  </div>
)

const MorganStanley = ({ classes, breakpoint }) => {

  const small = (breakpoint === 'xs' || breakpoint === 'sm')

  return small
    ? (
        <section className={classes.wrapper}>
          <div className={classes.textSide}>
            {text}
          </div>
          <div className={classes.imageSide}>
            {image}
          </div>
        </section>
      )
    : (
        <section className={classes.wrapper}>
          <div className={classes.imageSide}>
            {image}
          </div>
          <div className={classes.textSide}>
            {text}
          </div>
        </section>
      )
}

const styles = theme => ({
  wrapper: {

    boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.075)',
    // display: 'flex',
    // flexDirection: 'column',
    // backgroundColor: 'transparent',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  },
  imageSide: {


    padding: '0 100px',
    maxWidth: 300,

    // flexBasis: '45%',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    // [theme.breakpoints.up('md')]: {
      // backgroundColor: '#112951',
    // }
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
)(MorganStanley)