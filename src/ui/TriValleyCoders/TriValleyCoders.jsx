import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import iMeetup01 from 'media/meetup01.jpg'
import withBreakpoint from 'ui/withBreakpoint'
import ResponsiveImage from 'ui/ResponsiveImage'

const image = (
  <div>
    <ResponsiveImage src={iMeetup01} alt='prople at meeting around conference table' />
  </div>
)

const text = (
  <div>
    <Text variant='h2'>TriValley Coders</Text>
    <Text variant='subtitle2'>Founder</Text>
    <Text variant='body1'>TriValley Coders was founded in 2016 as a community of software developers helping each other learn to code. Over the past 2.5 years it has evolved into a class-like format with mentors helping attendees to lean specific MERN Stack skills. Since inception, TriValley Coders has held more than 160 events.</Text>
  </div>
)

const TriValleyCoders = ({ classes, breakpoint }) => {
  const small = (breakpoint === 'xs' || breakpoint === 'sm')
  return (
    <section>
      {
        small
          ? (
              <div className={classes.wrapper}>
                <div className={classes.textSide}>
                  { text }
                </div>
                <div className={classes.imageSide}>
                  { image }
                </div>
              </div>

            )
          : (
              <div className={classes.wrapper}>
                <div className={classes.imageSide}>
                  { image }
                </div>
                <div className={classes.textSide}>
                  { text }
                </div>

              </div>
            )
      }
    </section>
  )
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.075)',
    backgroundColor: 'transparent',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    }
  },
  imageSide: {
    // backgroundColor: 'red',
    flexBasis: '45%',
    // padding: '0 30px',
    // maxWidth: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
)(TriValleyCoders)