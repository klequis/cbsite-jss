import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import ResponsiveImage from 'ui/ResponsiveImage'
import withBreakpoint from 'ui/withBreakpoint'
import iWPF from 'media/new/wpf-smaller.png'
import iSilverlight from 'media/new/silverlight-smaller.png'
import Section from 'ui/Section'

const text = (
  <div>
    <Text variant='h2'>New York City WPF & Silverlight Meetup</Text>
    <Text variant='subtitle2'>Co-organizer</Text>
    <Text variant='body1'>Co-organized and frequently presented at this Microsoft sponsored Meetup.</Text>
  </div>
)

const WPFSilverlight = ({ classes, breakpoint }) => {

  const small = (breakpoint === 'xs' || breakpoint === 'sm')

  return small
    ? (
        <Section className={classes.wrapper}>
          <div className={classes.text}>
            { text }
          </div>
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
    : (
        <Section className={classes.wrapper}>
          <div className={classes.text}>
            { text }
          </div>
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
    [theme.breakpoints.up('md')]: {
      // width: 10,
    }
  },
  silverlight: {
    maxWidth: 80,
  },
  wrapper: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  image: {
    paddingTop: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    // eslint-disable-next-line
    justifyContent: 'space-evenly',
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'green',
      flexBasis: '50%',
    }
  },
  text: {
    padding: '0 2rem',
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'blue',
      padding: 0,
      flexBasis: '50%',
    }
  },
})

export default compose(
  withBreakpoint,
  injectSheet(styles)
)(WPFSilverlight)