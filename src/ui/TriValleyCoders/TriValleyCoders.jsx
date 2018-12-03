import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import iMeetup01 from 'media/meetup01.jpg'
import iMeetup0101 from 'media/meetup01.01.jpg'
import iMeetup0102 from 'media/meetup01.02.jpg'
import iMeetup0103 from 'media/meetup01.03.jpg'
import withBreakpoint from 'ui/withBreakpoint'
import ResponsiveImage from 'ui/ResponsiveImage'
import Section from 'ui/Section'
// import { SizeMe } from 'react-sizeme'
import ContainerDimensions from 'react-container-dimensions'
import PictureElement from 'ui/PictureElement'
import { yellow } from 'logger'

const text = (
  <div>
    <Text variant='h2'>TriValley Coders</Text>
    <Text variant='subtitle2'>Founder</Text>
    <Text variant='body1'>TriValley Coders was founded in 2016 as a community of software developers helping each other learn to code. Over the past 2.5 years it has evolved into a class-like format with mentors helping attendees to lean specific MERN Stack skills. Since inception, TriValley Coders has held more than 160 events.</Text>
  </div>
)

const Image = (props) => {
  // console.log('props', props)
  yellow('ratio', `${props.width / props.height} - width: ${props.width}`)
  return (
    <div className={props.className}>
      <PictureElement images={[iMeetup0101, iMeetup0102, iMeetup0103]} alt='prople at meeting around conference table' />
    </div>
  )
}

const TriValleyCoders = ({ classes, breakpoint }) => {

  const small = (breakpoint === 'xs' || breakpoint === 'sm')

  return (
    <Section>
      {
        small
          ? (
              <div className={classes.wrapper}>
                <div className={classes.text}>
                  { text }
                </div>
                <div className={classes.image}>
                  <Image
                    className={classes.image}
                  />
                </div>
              </div>
            )
          : (
              <div className={classes.wrapper}>
                <div className={classes.text}>
                  { text }
                </div>
                <ContainerDimensions>
                  <Image
                    className={classes.image}
                  />
                </ContainerDimensions>

              </div>
            )
      }
    </Section>
  )
}

const styles = theme => ({
  wrapper: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      // minHeight: 300,
    }
  },
  image: {
    marginTop: '1.5rem',
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'green',
      margin: 0,
      flexBasis: '50%',
      flexShrink: 0,
    }
  },
  text: {
    padding: '0 2rem',
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'blue',
      flexBasis: '50%',
    }
  },
})

export default compose(
  withBreakpoint,
  injectSheet(styles)
)(TriValleyCoders)