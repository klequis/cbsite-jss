import React from 'react'
import injectSheet from 'react-jss'
import Text from 'components/Text'
import iResponsive from 'media/responsive.svg'
import ResponsiveImage from 'components/ResponsiveImage'
import Section from 'components/Section'


const text = (
  <div>
    <Text variant='h2' align='center'>Responsive Web Apps</Text>
    <Text variant='subtitle2' align='center'>Responsive Web Developer</Text>
    <Text variant='subtitle2' align='center'> Responsive CSS</Text>
    <Text variant='subtitle2' align='center'>Responsive Web Apps</Text>
  </div>
)

const Responsive = ({ classes, breakpoint }) => {
  return (
    <Section className={classes.wrapper} background='dark'>
      { text }
      <div className={classes.image}>
        <ResponsiveImage  src={iResponsive} className={classes.img} alt='responsive site on multi form factors' />
      </div>
    </Section>
  )
}

const styles = theme => ({
  img: {
    maxWidth: 550,
  },
  wrapper: {
    color: 'white',
  },
  image: {
    padding: '1rem 1rem 0 1rem',
    [theme.breakpoints.up('lg')]: {
      marginTop: 60,
    }
  },
})

export default injectSheet(styles)(Responsive)