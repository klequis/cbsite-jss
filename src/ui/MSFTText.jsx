import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import iWPF from 'media/wpf-smaller.png'
import iSilverlight from 'media/silverlight-smaller.png'
import iMeetup01 from 'media/meetup01.jpg'
import PictureElement from 'ui/PictureElement'

const MSFTTest = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <img src={iWPF} className={classes.wpf} alt='microsoft windows presentation foundation' />
      {/* <img src={iSilverlight} className={classes.silverlight} alt='microsoft silverlight' /> */}
      {/* <PictureElement images={[iMeetup01]} className={classes.meetup} /> */}
    </div>
  )
}

const styles = theme => ({
  meetup: {
    maxWidth: 200,
  },
  wrapper: {
    // margin: 0,
    // display: 'flex',
    // justifyContent: 'space-evenly',
    // padding: '1rem',
  },
  wpf: {
    // margin: 0,
    maxWidth: '30%',
  },
  silverlight: {
    // margin: 0,
    // maxWidth: 20,
    // height: 'auto',

    //responsive
    // display: 'block',
    // width: '20%',
    // marginRight: 'auto',
    // marginLeft: 'auto',
  }
})

export default compose(
  injectSheet(styles)
)(MSFTTest)