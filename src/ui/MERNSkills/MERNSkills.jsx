import React from 'react'
import injectSheet from 'react-jss'
import iMongo from 'media/new/mongodb.svg'
import iExpress from 'media/new/express.svg'
import iReact from 'media/new/react.svg'
import iNode from 'media/new/node.svg'
import Text from 'ui/Text'

const logoStyle = {
  imgFluid: {
    display: 'block',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}

const Skills = (props) => {
  const { classes } = props

  return (
    <div className={classes.wrapper}>
      <div className={classes.text}>
        <Text variant='h1'>Carl Becker</Text>
        <Text variant='subtitle1'>MERN Stack Developer</Text>
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
    </div>
  )

}

const styles = theme => {
  return({
    wrapper: {
      // backgroundColor: 'red', //tmp
      // backgroundColor: 'transparent',
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'center',
      // margin: 8,
      // width: '100%',
      // [theme.breakpoints.up('md')]: {
      //   flexDirection: 'row',
      // }
    },
    image: {
      // backgroundColor: 'green', //tmp
      display: 'flex',
      justifyContent: 'space-around',
      // eslint-disable-next-line
      justifyContent: 'space-evenly',
      paddingBottom: '2rem',
    },
    text: {
      // backgroundColor: 'blue', //tmp
      padding: '4rem 4rem 2rem 4rem',
    },
    logo: {
      // display: 'block',
      // width: '60%',
      // flexBasis: '50%',
      // margin: 'auto',
      maxHeight: 40,
    },

    logoGroup: {
      display: 'flex',
      // flexFlow: 'row wrap',
      flexDirection: 'column',
      // justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 0,
      paddingRight: 0,
      [theme.breakpoints.only('xs')]: {
        justifyContent: 'space-between',
      },
    },

  })
}

export default injectSheet(styles)(Skills)


/*


    */