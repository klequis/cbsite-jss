import React from 'react'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import Section from 'ui/Section'
import iRiding from 'media/riding.jpg'

const Riding = () => {
  return (
    <Section image={iRiding} imageSide='right' shadow>
      <Text variant='subtitle2'>Once Upon A Time</Text>
      <Text variant='h2'>Dressage Trainer & Instructor</Text>
      <Text variant='body1'>I fell in love with horses when I was 10 years old.</Text>
    </Section>
  )
}

export default Riding