import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'components/Text'
import ResponsiveImage from 'components/ResponsiveImage'
import iCacf from 'media/logos/cacf.png'
import Section from 'components/Section'

const text = (
  <div>
    <Text variant='h2' align='center'>Coalition for Asian American Children & Families</Text>
    <Text variant='subtitle2' align='center'>Former Board Member</Text>
  </div>
)

const CACF = ({ classes }) => {

  return (
    <Section background='white'>
      { text }
      <div className={classes.image}>
        <ResponsiveImage  src={iCacf} className={classes.logo} alt='responsive site on multi form factors' />
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
  }
})

export default compose(
  injectSheet(styles)
)(CACF)




















