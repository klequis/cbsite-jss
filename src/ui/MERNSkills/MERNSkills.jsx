import React from 'react'
import injectSheet from 'react-jss'
import iMongo from 'media/new/mongodb.svg'
import iExpress from 'media/new/express.svg'
import iReact from 'media/new/react.svg'
import iNode from 'media/new/node.svg'
import Text from 'ui/Text'

const fluidStyle = {
  imgFluid: {
    display: 'block',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}

const Skills = (props) => {
  const { classes, imageSide } = props

  if (imageSide === 'left') {
    return (
      <div
        className={classes.wrapper}
        elevation={0}

      >
        <div className={classes.imageSideStyle}>
          <div className={classes.logoRow}>
            <img src={iMongo} alt='mongo db logo'/>
            <img src={iExpress} alt='express js logo' />

          </div>
          <div className={classes.logoRow}>
            <img src={iReact} alt='react js logo' />
            <img src={iNode} alt='node js logo' />
          </div>
        </div>
        <div className={classes.textSideStyle}>
          <Text variant='h1'>Carl Becker</Text>
          <Text variant='h2'>MERN Stack Developer</Text>
        </div>
      </div>
    )
  }
  return (
    <div
      className={classes.wrapper}
      elevation={0}
    >
      <div className={classes.textSideStyle}>
        <Text variant='h1'>Carl Becker</Text>
        <Text variant='h2'>MERN Stack Developer</Text>
      </div>
      <div className={classes.imageSideStyle}>
        <div className={classes.logoRow}>
          <div className={classes.imgWrapper}>
            <img src={iMongo} alt='mongo db logo' className={classes.fluid}/>
          </div>
          <div className={classes.imgWrapper}>
            <img src={iExpress} alt='express js logo' className={classes.fluid} />
          </div>
        </div>
        <div className={classes.logoRow}>
          <div className={classes.imgWrapper}>
            <img src={iReact} alt='react js logo' className={classes.fluid}/>
          </div>
          <div className={classes.imgWrapper}>
            <img src={iNode} alt='node js logo' className={classes.fluid}/>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = theme => {
  return({
    imgWrapper: {
      width: 300,
      // backgroundColor: 'yellow',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    fluid: {
      display: 'block',
      width: '100%',
      margin: 'auto',

    },
    imageSideStyle: {
      // flexBasis: '33.333333%',
      width: '45%',
      // backgroundColor: 'orange',
      // paddingTop: 8,
      // paddingBottom: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'space-between',
      justifyContent: 'space-evenly',
    },
    textSideStyle: {
      // backgroundColor: 'purple',
      width: '55%',
      padding: '4rem 4rem 2rem 4rem',
      margin: '0 auto',
      flexShrink: 1,
      alignSelf: 'center',
      maxWidth: '64rem',
      textAlign: 'left',
    },
    logoRow: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      paddingLeft: 0,
      paddingRight: 0,
      [theme.breakpoints.up(316)]: {
        justifyContent: 'space-between',
        backgroundColor: 'purple',
      },
      // [theme.breakpoints.up(400)]: {
        // paddingLeft: '10%',
        // paddingRight: '10%',

      // },
      // [theme.breakpoints.up(690)]: {
      //   // paddingLeft: '15%',
      //   // paddingRight: '15%',
      // },
      // [theme.breakpoints.up(800)]: {
      //   // paddingLeft: '20%',
      //   // paddingRight: '20%',
      // },
    },
    wrapper: {
      display: 'flex',
      margin: 8,
      minHeight: 100,
      backgroundColor: 'transparent',
      // backgroundColor: 'lightblue',
    },
  })
}

export default injectSheet(styles)(Skills)