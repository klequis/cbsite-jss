import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import ResponsiveImage from 'ui/ResponsiveImage'
import withBreakpoint from 'ui/withBreakpoint'
import iWPF from 'media/new/wpf-smaller.png'
import iSilverlight from 'media/new/silverlight-smaller.png'

const imageStyles = {
  img: {
    display: 'flex',
  },
  silverlight: {
    // backgroundColor: 'red',
    maxWidth: 200,
    margin: '0 10px'
  },
  wpf: {
    // backgroundColor: 'green',
    maxWidth: 410,
    margin: '0 10px'
  }

}
const image = (
  <div style={imageStyles.img}>
    <div style={imageStyles.wpf}>
      <ResponsiveImage src={iWPF} alt='microsoft windows presentation
      foundation' />
    </div>
    <div style={imageStyles.silverlight}>
      <ResponsiveImage src={iSilverlight} alt='microsoft silverlight' />
    </div>
  </div>
)
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
        <section className={classes.wrapper}>
          <div className={classes.textSide}>
            { text }
          </div>
          <div className={classes.imageSide}>
            { image }
          </div>
        </section>
      )
    : (
        <section className={classes.wrapper}>
          <div className={classes.textSide}>
            { text }
          </div>
          <div className={classes.imageSide}>
            { image }
          </div>
        </section>
      )
}


const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.075)',
    backgroundColor: 'transparent',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    }
  },
  imageSide: {
    // backgroundColor: 'rgb(230, 230, 230)',
    flexBasis: '45%',
    // padding: '0 30px',
    padding: '0 50px',
    // maxWidth: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSide: {
    // backgroundColor: 'purple',
    flexBasis: '55%',
    padding: '4rem 4rem 2rem 4rem',
  },
})

export default compose(
  withBreakpoint,
  injectSheet(styles)
)(WPFSilverlight)