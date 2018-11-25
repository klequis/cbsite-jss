import React from 'react'
import injectSheet from 'react-jss'
import Section from 'ui/Section'
import iTeaching from 'media/teaching.jpg'
import iMS from 'media/ms01.png'
import iMeetup01 from 'media/meetup01.jpg'
import iTR from 'media/tr.jpg'
import iResponsive from 'media/new/responsive.svg'
import iRiding from 'media/riding.jpg'
import iHknc from 'media/new/hknc-1.png'
import iCacf from 'media/new/cacf.png'
import MERNSkills from 'ui/MERNSkills'
import H2 from 'ui/typography/H2'
import St2 from 'ui/typography/St2'
import RestOfSkills from 'ui/RestOfSkills'
// import { Breakpoints } from 'ui/createBreakpoints'

const Body1 = ({ children }) => {
  return (<p variant='body1' align='left'>{children}</p>)
}

const Home = (props) => {
  const { classes } = props
  return (
    <div>
      <MERNSkills />
      <Section image={iResponsive} imageSide='left' shadow>
        <H2>Responsive</H2>
        <St2>A responsive Web Developer</St2>
        <St2> Using responsive CSS</St2>
        <St2>To make responsive Web Apps</St2>
      </Section>
      <Section image={iMeetup01} imageSide='right' shadow>
        <H2>TriValley Coders</H2>
        <St2>Founder</St2>
        <Body1 align='left'>TriValley Coders was founded in 2016 as a community of software developers helping each other learn to code. Over the past 2.5 years it has evolved into a class-like format with mentors helping attendees to lean specific MERN Stack skills. Since inception, TriValley Coders has held more than 160 events.</Body1>
      </Section>
      <Section image={iTeaching} imageSide='left' shadow>
      <H2>Teaching</H2>
      <Body1>At TriValley Coders I have been teaching people to code for the past two years. I also held a weekly coding and general tech class for middle school children from May 2016 to Feb 2017. In a form role ...</Body1>
      </Section>

      <Section image={iMS} imageSide='right' shadow>
        <H2>Morgan Stanley</H2>
        <Body1>My first role at Morgan Stanley was creating automated spreadsheet models. I worked with a wide variety of financial data and developed a query and reporting engine that worked against Sybase databases. Over a period of 14 years I filled the roles of software developer, team lead, development manager, project manager and product manager.</Body1>
        <Body1>Applications I worked on concerned CRM, Knowledge Management, Document Management, Banker & Analyst Productivity, reducing information overload, Firmwide Branding and Pitchbook automation. I have often been called 'the grand-father of pitchbook automation', although dropping the 'grand' would be fine with me. </Body1>
      </Section>
      <Section image={iTR} imageSide='left' shadow>
        <Body1>I was at Thomson Reuters for 3 years as a Product Manager where I worked with clients at Deutsche Bank, Morgan Stanley, Credit Suisse, Nomura, and Rothschild to develop Thomson Reuters MS Excel to MS PowerPoint linking application which enabled users to use Excel data & graphs with linked data PowerPoint presentations. Although there is a native equivalent, we were able to develop a product that was more stable with a feature set more tailored to our clients.</Body1>
      </Section>
      {/* <RestOfSkills /> */}
      <Section image={iRiding} imageSide='right' shadow>
        <St2>Once Upon A Time</St2>
        <H2>Dressage Trainer & Instructor</H2>
        <Body1>I fell in love with horses when I was 10 years old.</Body1>
      </Section>
      <Section image={iHknc} imageSide='left' shadow>
        <H2>Helen Keller Nation Center</H2>
        <St2>Coordinator Auxiliary Medical Services</St2>
        <Body1>Worked at Helen Keller part-time for two years and then volunteered. They gave me a generous title. I taught daily living skills, performed sign-language interpretation for doctors &amp; patients, and a variety of non-glorious tasks such as medial record filing, first-aid station maintenance and airport transportation. </Body1>
      </Section>
      <Section image={iCacf} imageSide='right' shadow>
        <H2>Coalition for Asian American Children & Families</H2>
        <St2>Board Member</St2>
        <Body1>Served on CACF's board for 3 years.</Body1>
      </Section>
    </div>
  )
}

const styles = {
}

export default injectSheet(styles)(Home)