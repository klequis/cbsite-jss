import React from 'react'
import injectSheet from 'react-jss'
import iMongo from 'media/new/mongodb.svg'
import iExpress from 'media/new/express.svg'
import iReact from 'media/new/react.svg'
import iNode from 'media/new/node.svg'
import Text from 'ui/Text'
import Section from 'ui/Section'

const Skills = ({ classes, breakpoint }) => {


  return (
    <Section className={classes.wrapper}>
      <div className={classes.text}>
        <div>
          <Text variant='h1'>Carl Becker</Text>
          <Text variant='subtitle1'>MERN Stack Developer</Text>
        </div>
      </div>
      <div className={classes.image}>
        <div className={classes.logoGroup}>
          <img src={iMongo} alt='mongo db logo' className={classes.logo}/>
          <img src={iExpress} alt='express js logo' className={classes.logo} />
        </div>
        <div className={classes.logoGroup}>
          <img src={iReact} alt='react js logo' className={classes.logo}/>
          <img src={iNode} alt='node js logo' className={classes.logo}/>
        </div>
      </div>
    </Section>
  )

}

const styles = theme => {
  return({
    wrapper: {
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      }
    },
    image: {
      [theme.breakpoints.up('md')]: {
        backgroundColor: 'green',
        flexBasis: '50%',
        display: 'flex',
        justifyContent: 'center',
      }
    },
    text: {
      [theme.breakpoints.up('md')]: {
        backgroundColor: 'blue',
        flexBasis: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }
    },
    logo: {
      maxHeight: 40,
      [theme.breakpoints.up('md')]: {
        maxHeight: 800,
      },
    },

    logoGroup: {
      backgroundColor: 'purple',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-around',
      // eslint-disable-next-line
      justifyContent: 'space-evenly'
    },

  })
}

export default injectSheet(styles)(Skills)