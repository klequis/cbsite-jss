import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import ResponsiveImage from 'ui/ResponsiveImage'
import iHknc from 'media/logos/hknc-1.png'
import Section from 'ui/Section'
import ParagraphWrapper from 'ui/ParagraphWrapper'

const text = (
  <ParagraphWrapper>
    <Text variant='h2' align='center'>Helen Keller Nation Center</Text>
    <Text variant='subtitle2' align='center'>Coordinator Auxiliary Medical Services</Text>
    <Text variant='body1'>Worked at Helen Keller part-time for two years and then volunteered. They gave me a generous title. I taught daily living skills, performed sign-language interpretation for doctors &amp; patients, and a variety of non-glorious tasks such as medial record filing, first-aid station maintenance and airport transportation. </Text>
  </ParagraphWrapper>
)

const HKNC = ({ classes }) => {

  return  (
    <Section>
      { text }
      <div className={classes.image}>
        <ResponsiveImage src={iHknc} className={classes.logo} alt='helen keller national center' />
      </div>
    </Section>
  )
}


const styles = theme => ({
  logo: {
    maxWidth: '15rem',
    [theme.breakpoints.up('md')]: {
      maxWidth: '20rem',
    }
  },
  image: {
    paddingTop: '1.5rem',
  },
})

export default compose(
  injectSheet(styles)
)(HKNC)