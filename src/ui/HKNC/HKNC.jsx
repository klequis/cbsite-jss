import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import ResponsiveImage from 'ui/ResponsiveImage'
import withBreakpoint from 'ui/withBreakpoint'
import iHknc from 'media/new/hknc-1.png'

const image = (
  <ResponsiveImage src={iHknc} alt='helen keller national center' />
)
const text = (
  <div>
    <Text variant='h2'>Helen Keller Nation Center</Text>
    <Text variant='subtitle2'>Coordinator Auxiliary Medical Services</Text>
    <Text variant='body1'>Worked at Helen Keller part-time for two years and then volunteered. They gave me a generous title. I taught daily living skills, performed sign-language interpretation for doctors &amp; patients, and a variety of non-glorious tasks such as medial record filing, first-aid station maintenance and airport transportation. </Text>
  </div>
)

const HKNC = ({ classes, breakpoint }) => {

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
          <div className={classes.imageSide}>
            { image }
          </div>
          <div className={classes.textSide}>
            { text }
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
)(HKNC)