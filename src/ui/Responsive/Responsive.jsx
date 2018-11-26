import React from 'react'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
// import Section from 'ui/Section'
import iResponsive from 'media/new/responsive.svg'
import ResponsiveImage from 'ui/ResponsiveImage'

const Responsive = ({ classes }) => {
  return (
    <section className={classes.wrapper}>
      <Text variant='h2'>Responsive Web Apps</Text>
      <div className={classes.imageWrapper}>
        <ResponsiveImage src={iResponsive} />
      </div>
      <Text variant='subtitle2'>A responsive Web Developer</Text>
      <Text variant='subtitle2'> Using responsive CSS</Text>
      <Text variant='subtitle2'>To make responsive Web Apps</Text>
    </section>
  )
}


const styles = theme => ({
  wrapper: {
    paddingTop: 20,
    boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.075)',
  },
  imageWrapper: {
    marginBottom: 20,
  }
})
export default injectSheet(styles)(Responsive)