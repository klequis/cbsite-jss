import React from 'react'
import injectSheet from 'react-jss'
import Text from 'components/Text'
import iRidingXL from 'media/ridingXL.jpg'
import PictureElement from 'ui/PictureElement'
import Section from 'components/Section'

const text = (
  <div>
    <Text variant='subtitle2' align='center'>Once Upon A Time</Text>
    <Text variant='h2' align='center'>Dressage Trainer & Instructor</Text>
    <Text variant='subtitle3' align='center'>I fell in love with horses when I was 10 years old.</Text>
  </div>
)

const Responsive = ({ classes, breakpoint }) => {

  return (
    <Section background='dark'>
      { text }
      <div>
        <PictureElement
          // maxHeight={300}
          images={{
            xs: iRidingXL,
            sm: iRidingXL,
            md: iRidingXL,
            lg: iRidingXL,
            xl: iRidingXL,
          }}
          alt='people at meeting around conference table'
          className={classes.image}
        />
      </div>
    </Section>
  )
}

const styles = theme => ({
  image: {
    marginTop: '3rem',
    [theme.breakpoints.up('xl')]: {
      maxWidth: 800,
      marginTop: 70,
    },
  },
})

export default injectSheet(styles)(Responsive)