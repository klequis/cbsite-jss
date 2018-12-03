import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import ResponsiveImage from 'ui/ResponsiveImage'
import withBreakpoint from 'ui/withBreakpoint'
import iHknc from 'media/new/hknc-1.png'
import Section from 'ui/Section'


const text = (
  <div>
    <Text variant='h2'>Helen Keller Nation Center</Text>
    <Text variant='subtitle2'>Coordinator Auxiliary Medical Services</Text>
    <Text variant='body1'>Worked at Helen Keller part-time for two years and then volunteered. They gave me a generous title. I taught daily living skills, performed sign-language interpretation for doctors &amp; patients, and a variety of non-glorious tasks such as medial record filing, first-aid station maintenance and airport transportation. </Text>
  </div>
)

const HKNC = ({ breakpoint, classes, width }) => {

  // console.log('breakpoint', breakpoint)
  // console.log('width', width)



  const small = (breakpoint === 'xs' || breakpoint === 'sm')

  return small
    ? (
        <Section className={classes.wrapper}>
          <div className={classes.text}>
            { text }
          </div>
          <div className={classes.image}>
            <ResponsiveImage src={iHknc} className={classes.logo} alt='helen keller national center' />
          </div>
        </Section>
      )
    : (
        <Section className={classes.wrapper}>
          <div className={classes.text}>
            { text }
          </div>
          <div className={classes.image}>
            <ResponsiveImage src={iHknc} className={classes.logo} alt='helen keller national center' />
          </div>
        </Section>
      )
}


const styles = theme => ({
  logo: {
    // maxWidth: 210,
  },
  wrapper: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  image: {
    paddingTop: '1.5rem',
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'green',
      padding: 0,
      flexBasis: '50%',
    }
  },
  text: {
    padding: '0 2rem',
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'blue',
      padding: 0,
      flexBasis: '50%',
    }
  },
})

export default compose(
  withBreakpoint,
  injectSheet(styles)
)(HKNC)