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
          <div className={classes.imgWrapper}>
            <img src={iMongo} alt='mongo db logo' className={classes.logo}/>
          </div>
          <div className={classes.imgWrapper}>
            <img src={iExpress} alt='express js logo' className={classes.logo} />
          </div>
        </div>
        <div className={classes.logoGroup}>
          <div className={classes.imgWrapper}>
            <img src={iReact} alt='react js logo' className={classes.logo}/>
          </div>
          <div className={classes.imgWrapper}>
            <img src={iNode} alt='node js logo' className={classes.logo}/>
          </div>
        </div>
      </div>
    </div>
  )

}

const styles = theme => {
  return({
    wrapper: {
      // backgroundColor: 'red', //tmp
      display: 'flex',
      flexDirection: 'column',
      margin: 8,
      minHeight: 100,

      backgroundColor: 'transparent',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
      }
    },
    image: {
      // backgroundColor: 'green', //tmp
      // width: '45%',
      flexBasis: '45%',
      // paddingTop: 8,
      // paddingBottom: 8,
      // display: 'flex',
      // flexDirection: 'column',
      // alignItems: 'space-between',
      // justifyContent: 'space-evenly',
    },
    text: {
      // backgroundColor: 'blue', //tmp
      //width: '55%',
      flexBasis: '55%',
      // padding: '4rem 4rem 2rem 4rem',
      // margin: '0 auto',
      // flexShrink: 1,
      // alignSelf: 'center',
      // maxWidth: '64rem',
      // textAlign: 'left',
    },
    imgWrapper: {
      width: 200,
      [theme.breakpoints.up('md')]: {
        width: 300,
      },

      // backgroundColor: 'yellow',
      marginLeft: 'auto',
      marginRight: 'auto',

    },
    logo: {
      display: 'block',
      width: '60%',
      margin: 'auto',
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