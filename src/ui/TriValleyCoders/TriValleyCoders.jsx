import React from 'react'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import Section from 'ui/Section'
import iMeetup01 from 'media/meetup01.jpg'

const TriValleyCoders = () => {
  return (
    <Section image={iMeetup01} imageSide='right' shadow>
      <Text variant='h2'>TriValley Coders</Text>
      <Text variant='subtitle2'>Founder</Text>
      <Text variant='body1'>TriValley Coders was founded in 2016 as a community of software developers helping each other learn to code. Over the past 2.5 years it has evolved into a class-like format with mentors helping attendees to lean specific MERN Stack skills. Since inception, TriValley Coders has held more than 160 events.</Text>
    </Section>
  )
}

export default TriValleyCoders