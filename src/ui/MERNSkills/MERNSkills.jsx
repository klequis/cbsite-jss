import React from 'react'
import injectSheet from 'react-jss'
import iMongo from 'media/mongodb-light.svg'
import iExpress from 'media/express-white.svg'
import iReact from 'media/react.svg'
import iNode from 'media/node-light.svg'
import Text from 'ui/Text'
import Section from 'ui/Section'

const Skills = ({ classes, breakpoint }) => {


  return (
    <Section className={classes.wrapper} background='dark'>
      <div className={classes.text}>
        <div>
          <Text variant='h1' align='center'>Carl Becker</Text>
          <Text variant='subtitle1' align='center'>MERN Stack Developer</Text>
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
      // [theme.breakpoints.up('md')]: {
      //   display: 'flex',
      // }
    },
    image: {
      [theme.breakpoints.up('lg')]: {
        marginTop: 70,
      }
      // [theme.breakpoints.up('md')]: {
      //   backgroundColor: 'green',
      //   flexBasis: '50%',
      //   display: 'flex',
      //   justifyContent: 'center',
      // }
    },
    text: {
      // [theme.breakpoints.up('md')]: {
      //   backgroundColor: 'blue',
      //   flexBasis: '50%',
      //   display: 'flex',
      //   flexDirection: 'column',
      //   alignItems: 'center',
      // }
    },
    logo: {
      maxHeight: 40,
      // [theme.breakpoints.up('md')]: {
      //   maxHeight: 800,
      // },
      [theme.breakpoints.up('lg')]: {
        maxHeight: 60,
      }
    },

    logoGroup: {
      // backgroundColor: 'purple',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-around',
      // eslint-disable-next-line
      justifyContent: 'space-evenly',
      [theme.breakpoints.up('lg')]: {
        marginTop: 40,
      }
    },

  })
}

export default injectSheet(styles)(Skills)