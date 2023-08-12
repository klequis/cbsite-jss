import React from 'react'
import injectSheet from 'react-jss'
import Text from 'components/Text'
import Section from 'components/Section'
import iTeaching from 'media/teaching.jpg'

const Teaching = () => {
  return (
    <Section image={iTeaching} imageSide='left' shadow>
      <Text variant='h2'>Teaching</Text>
      <Text variant='body1'>At TriValley Coders I have been teaching people to code for the past two years. I also held a weekly coding and general tech class for middle school children from May 2016 to Feb 2017. In a form role ...</Text>
    </Section>
  )
}

export default Teaching