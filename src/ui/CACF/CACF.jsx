import React from 'react'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import Section from 'ui/Section'
import iCacf from 'media/new/cacf.png'

const CACF = () => {
  return (
    <Section image={iCacf} imageSide='right' shadow>
      <Text variant='h2'>Coalition for Asian American Children & Families</Text>
      <Text variant='subtitle2'>Board Member</Text>
      <Text variant='body1'>Served on CACF's board for 3 years.</Text>
    </Section>
  )
}

export default CACF