import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import ResponsiveImage from 'ui/ResponsiveImage'
import withBreakpoint from 'ui/withBreakpoint'
// import iRiding from 'media/riding.jpg'
import iRiding from 'media/riding-cropped.jpg'
import Section from 'ui/Section'

const image = (
  <ResponsiveImage  src={iRiding} alt='carl riding charmeur' />
)
const text = (
  <div>
    <Text variant='subtitle2' align='center'>Once Upon A Time</Text>
    <Text variant='h2' align='center'>Dressage Trainer & Instructor</Text>
    <Text variant='subtitle3' align='center'>I fell in love with horses when I was 10 years old.</Text>
  </div>
)

const Responsive = ({ classes, breakpoint }) => {


  return (
    <Section className={classes.wrapper}>
      <div className={classes.text}>
        { text }
      </div>
      <div className={classes.image}>
        { image }
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
)(Responsive)



















