import React from 'react'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import Section from 'ui/Section'
import iTR from 'media/tr.jpg'

const ThomsonReuters = () => {
  return (
    <Section image={iTR} imageSide='left' shadow>
      <Text variant='body1'>I was at Thomson Reuters for 3 years as a Product Manager where I worked with clients at Deutsche Bank, Morgan Stanley, Credit Suisse, Nomura, and Rothschild to develop Thomson Reuters MS Excel to MS PowerPoint linking application which enabled users to use Excel data & graphs with linked data PowerPoint presentations. Although there is a native equivalent, we were able to develop a product that was more stable with a feature set more tailored to our clients.</Text>
    </Section>
  )
}

export default ThomsonReuters