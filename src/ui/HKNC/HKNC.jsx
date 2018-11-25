import React from 'react'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import Section from 'ui/Section'
import iHknc from 'media/new/hknc-1.png'

const HKNC = () => {
  return (
    <Section image={iHknc} imageSide='left' shadow>
      <Text variant='h2'>Helen Keller Nation Center</Text>
      <Text variant='subtitle2'>Coordinator Auxiliary Medical Services</Text>
      <Text variant='body1'>Worked at Helen Keller part-time for two years and then volunteered. They gave me a generous title. I taught daily living skills, performed sign-language interpretation for doctors &amp; patients, and a variety of non-glorious tasks such as medial record filing, first-aid station maintenance and airport transportation. </Text>
    </Section>
  )
}

export default HKNC