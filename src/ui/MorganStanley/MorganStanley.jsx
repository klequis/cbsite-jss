import React from 'react'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import Section from 'ui/Section'
import iMS from 'media/ms01.png'

const MorganStanley = () => {
  return (
    <Section image={iMS} imageSide='left' shadow>
        <Text variant='h2'>Morgan Stanley</Text>
        <Text variant='body1'>My first role at Morgan Stanley was creating automated spreadsheet models. I worked with a wide variety of financial data and developed a query and reporting engine that worked against Sybase databases. Over a period of 14 years I filled the roles of software developer, team lead, development manager, project manager and product manager.</Text>
        <Text variant='body1'>Applications I worked on concerned CRM, Knowledge Management, Document Management, Banker & Analyst Productivity, reducing information overload, Firmwide Branding and Pitchbook automation. I have often been called 'the grand-father of pitchbook automation', although dropping the 'grand' would be fine with me. </Text>
      </Section>
  )
}

export default MorganStanley