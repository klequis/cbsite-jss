import React from 'react'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import Section from 'ui/Section'
import iResponsive from 'media/new/responsive.svg'

const Responsive = () => {
  return (
    <Section image={iResponsive} imageSide='left' shadow>
      <Text variant='h2'>Responsive</Text>
      <Text variant='subtitle2'>A responsive Web Developer</Text>
      <Text variant='subtitle2'> Using responsive CSS</Text>
      <Text variant='subtitle2'>To make responsive Web Apps</Text>
    </Section>
  )
}

export default Responsive