import React from 'react'
import injectSheet from 'react-jss'
import Text from 'components/Text'
import ResponsiveImage from 'components/ResponsiveImage'
import iWPF from 'media/logos/wpf-smaller.png'
import iSilverlight from 'media/logos/silverlight-smaller.png'
import Section from 'components/Section'
import ParagraphWrapper from 'components/ParagraphWrapper'

const text = (
  <div>
    <Text variant='h2' align='center'>New York City WPF & Silverlight Meetup</Text>

    <Text variant='subtitle2' align='center'>Co-organizer</Text>
    <ParagraphWrapper>
      <Text variant='body1'  align='center'>Co-organized and frequently presented at this Microsoft sponsored Meetup.</Text>
    </ParagraphWrapper>
  </div>
)

const WPFSilverlight = ({ classes }) => {
  return (
    <Section background='white'>
      { text }
      <div className={classes.image}>
        <div className={classes.wpf}>
            <ResponsiveImage src={iWPF}  alt='microsoft windows presentation foundation' />
        </div>
        <div className={classes.silverlight}>
          <ResponsiveImage src={iSilverlight} alt='microsoft silverlight' />
        </div>
      </div>
    </Section>
  )
}

const styles = theme => ({
  wpf: {
    maxWidth: 160,
  },
  silverlight: {
    maxWidth: 80,
  },
  image: {
    paddingTop: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    // eslint-disable-next-line
    justifyContent: 'space-evenly',
  },
})

export default injectSheet(styles)(WPFSilverlight)