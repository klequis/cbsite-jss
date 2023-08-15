import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'components/Text'
import iTVC01 from 'media/meetup/tvc01.jpg'
import Section from 'components/Section'
import PictureElement from 'ui/PictureElement'
import ParagraphWrapper from 'components/ParagraphWrapper'

const text = (
  <ParagraphWrapper>
    <Text variant='h2' align='center'>TriValley Coders</Text>
    <Text variant='subtitle2' align='center'>Founder</Text>
    <Text variant='body1'>TriValley Coders was founded in 2016 as a community of software developers helping each other learn to code. Over the past 2.5 years it has evolved into a class-like format with mentors helping attendees to learn specific MERN Stack skills. Since inception, TriValley Coders has held more than 160 events.</Text>
  </ParagraphWrapper>
)

const TriValleyCoders = ({ classes, breakpoint }) => {
  return (
    <Section background='white'>
      { text }
      <PictureElement
        images={{
          xs: iTVC01,
          sm: iTVC01,
          md: iTVC01,
          lg: iTVC01,
          xl: iTVC01,
        }}
        alt='people at meeting working at conference table'
        className={classes.image}
      />
    </Section>
  )
}

const styles = theme => ({
  image: {
    marginTop: '2.5rem',
    [theme.breakpoints.up('xl')]: {
      marginTop: 70,
    }
  },
})

export default compose(
  injectSheet(styles)
)(TriValleyCoders)