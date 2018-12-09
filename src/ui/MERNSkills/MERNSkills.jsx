import React from 'react'
import injectSheet from 'react-jss'
import iMongo from 'media/logos/mongodb-light.xl.svg'
import iExpress from 'media/logos/express-white.xl.svg'
import iReact from 'media/logos/react.xl.svg'
import iNode from 'media/logos/node-light.xl.svg'
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
    },
    image: {
      [theme.breakpoints.up('lg')]: {
        marginTop: 70,
      }
    },
    text: {
      marginBottom: '3.5em',
    },
    logo: {
      maxHeight: '3rem',

      [theme.breakpoints.up('md')]: {
        maxHeight: '4rem',
      },
      [theme.breakpoints.up('xl')]: {
        maxHeight: '3.75rem',
      },
    },

    logoGroup: {
      // backgroundColor: 'purple',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-around',
      // eslint-disable-next-line
      justifyContent: 'space-evenly',
      marginTop: '2em',
      [theme.breakpoints.up('lg')]: {

      }
    },

  })
}

export default injectSheet(styles)(Skills)