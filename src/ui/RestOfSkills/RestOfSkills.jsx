import React from 'react'
import injectSheet from 'react-jss'
import Section from 'components/Section'
// import Text from 'components/Text'
// import iReactRouter from 'media/logos/react-router.svg'
// import iRedux from 'media/logos/redux.svg'
// import iMUI from 'media/logos/material-ui.svg'
// import iMySql from 'media/logos/mysql.svg'
// import iRest from 'media/logos/rest-api.svg'
// import iWebpack from 'media/logos/webpack.svg'
// import iUbuntu from 'media/logos/ubuntu.svg'
// import iPassport from 'media/logos/passport.svg'
// import iMocha from 'media/logos/mocha.svg'
// import iTravis from 'media/logos/travis-ci.svg'
// import iYarn from 'media/logos/yarn.svg'
// import iRamda from 'media/logos/ramda.svg'
// import iWordpress from 'media/logos/wordpress.svg'
// import iMarkdown from 'media/logos/markdown.svg'
// import iZenHub from 'media/logos/zenhub.svg'
// import iNodemon from 'media/logos/nodemon.svg'
// import iDrupal from 'media/logos/drupal.svg'
// import iAWS from 'media/logos/aws-sdk-js.svg'
// import iJS from 'media/logos/js-es6.svg'
// import iBootstrap from 'media/logos/bootstrap.svg'
// import iMongoDB from 'media/logos/mongodb-dark.svg'
// import iExpress from 'media/logos/express-light.svg'
// import iReact from 'media/logos/react.svg'
// import iNode from 'media/logos/node-light.new.svg'
// import iPhone from 'media/r-phone.svg'
// import iTablet from 'media/r-tablet.svg'
// import iLaptop from 'media/r-laptop.svg'

const TheRestSkills = props => {
  const { classes } = props
  return (
    <Section elevation={0} style={{ backgroundColor: 'gray'}} flexDirection="row">
      <div className={classes.leftRightDiv}  style={{backgroundColor: 'orange'}}>
        <div className={classes.leftDiv}>
          <b>Left</b>
          {/* <div className={classes.phone}>
            <img src={iPhone} alt='phone' />
          </div>
          <div className={classes.tablet}>
            <img src={iTablet} alt='tablet' />
          </div>
          <div className={classes.laptop}>
            <img src={iLaptop} alt='laptop' />
          </div> */}
        </div>
        <div className={classes.rightDiv}>
          <b>Right</b>
          {/* <img
            src={iExpress}
            className={classes.restLogo}
            alt='Express JS logo'
          />
          <img src={iNode} className={classes.restLogo} alt='node js logo' />
          <img src={iMongoDB} className={classes.restLogo} alt='mongoDB logo' />

          <img
            src={iReactRouter}
            className={classes.restLogo}
            alt='react router logo'
          />
          <img src={iMUI} className={classes.restLogo} alt='material ui logo' />
          <img
            src={iBootstrap}
            className={classes.restLogo}
            alt='bootstrap logo'
          />
          <img src={iRest} className={classes.restLogo} alt='rest api logo' />
          <img
            src={iMySql}
            className={classes.restLogo}
            alt='material ui logo'
          />
          <img src={iJS} className={classes.restLogo} alt='javascript logo' />
          <img src={iRamda} className={classes.restLogo} alt='ramda logo' />
          <img src={iNodemon} className={classes.restLogo} alt='nodemon logo' />
          <img src={iMocha} className={classes.restLogo} alt='mocha logo' />
          <img src={iUbuntu} className={classes.restLogo} alt='ubuntu logo' />
          <img
            src={iAWS}
            className={classes.restLogo}
            alt='aws javascript sdk logo'
          />
          <img src={iWebpack} className={classes.restLogo} alt='webpack logo' />
          <img
            src={iTravis}
            className={classes.restLogo}
            alt='travis ci logo'
          />
          <img
            src={iPassport}
            className={classes.restLogo}
            alt='passport logo'
          />
          <img src={iZenHub} className={classes.restLogo} alt='zenhub logo' />
          <img
            src={iMarkdown}
            className={classes.restLogo}
            alt='markdown logo'
          />
          <img src={iYarn} className={classes.restLogo} alt='yarn logo' />
          <img src={iDrupal} className={classes.restLogo} alt='drupal logo' />
          <img
            src={iWordpress}
            className={classes.restLogo}
            alt='wordpress logo'
          />
          <img src={iRedux} className={classes.restLogo} alt='redux logo' />
          <img src={iReact} className={classes.restLogo} alt='react js logo' /> */}
        </div>
      </div>
    </Section>
  )
}

const styles = theme => ({
  leftRightDiv: {
    display: 'flex',
    width: '100%',
    minHeight: '50px',
    backgroundColor: 'red',
  },
  leftDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // flexBasis: '20%',
    gap: '5em',
    border: '1px solid green'
    // flexGrow: 0
    // width: '10%'
  },
  rightDiv: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    // flexBasis: '80%',
    border: '1px solid blue'
  },
  phone: {
    // flexBasis: '10%'
    width: '10%'
  },
  tablet: {
    // flexBasis: '45%'
    width: '10%'
  },
  laptop: {
    // flexBasis: '45%'
    width: '10%'
  },
  restLogo: {
    margin: '1rem 0.5rem',
    width: 140,
    [theme.breakpoints.up('sm')]: {
      width: 150
    },
    [theme.breakpoints.up('lg')]: {
      width: 'auto'
    },
    maxHeight: 193.333
  },
  // wrapper: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center'
  // }
})

export default injectSheet(styles)(TheRestSkills)
