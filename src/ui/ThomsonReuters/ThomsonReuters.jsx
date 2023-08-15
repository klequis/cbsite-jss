import React from 'react'
import Text from 'components/Text'
import Section from 'components/Section'
import ParagraphWrapper from 'components/ParagraphWrapper'

const title = (
  <div>
    <Text variant='h2' align='center'>Thomson Reuters</Text>
  </div>
)

const body = (
  <ParagraphWrapper>
    <Text variant='body1' marginBottom={false}>I was at Thomson Reuters for 3 years as a Product Manager where I worked with clients at Deutsche Bank, Morgan Stanley, Credit Suisse, Nomura, and Rothschild to create Thomson Reuters' MS Excel to MS PowerPoint linking application which enabled users to use Excel data & graphs with linked data in PowerPoint presentations. Although there is a Microsoft Office native equivalent, we were able to develop a product that was more stable and with a feature set more tailored to our clients needs.</Text>
  </ParagraphWrapper>
)

const ThomsonReuters = ({ classes, breakpoint }) => {

  return (
    <Section background='white'>
      <span>{ title }</span>
      <span>{ body }</span>
    </Section>
  )
}

export default ThomsonReuters