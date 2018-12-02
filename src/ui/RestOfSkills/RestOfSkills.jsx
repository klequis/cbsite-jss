import React from 'react'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import ResponsiveImage from 'ui/ResponsiveImage'
import iReactRouter from 'media/new/react-router.svg'
import iRedux from 'media/new/redux.svg'
import iMUI from 'media/new/material-ui.svg'
import iMySql from 'media/new/mysql.svg'
import iRest from 'media/new/rest-api.svg'
import iWebpack from 'media/new/webpack.svg'
import iUbuntu from 'media/new/ubuntu.svg'
import iPassport from 'media/new/passport.svg'
import iMocha from 'media/new/mocha.svg'
import iTravis from 'media/new/travis-ci.svg'
import iYarn from 'media/new/yarn.svg'
import iRamda from 'media/new/ramda.svg'
import iWordpress from 'media/new/wordpress.svg'
import iMarkdown from 'media/new/markdown.svg'
import iZenHub from 'media/new/zenhub.svg'
import iNodemon from 'media/new/nodemon.svg'
import iDrupal from 'media/new/drupal.svg'
import iAWS from 'media/new/aws-sdk-js.svg'
import iJS from 'media/new/js-es6.svg'
import iBootstrap from 'media/new/bootstrap.svg'
import Section from 'ui/Section'

// const shadowStyle = {
//   boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.075)',
// }

const TheRestSkills = (props) => {
  const { classes } = props
  return (
    <Section
        className={classes.wrapper}
        elevation={0}
        // style={shadowStyle}
      >
      <Text variant='h2' align='center'>Current Toolkit</Text>
      <div className={classes.theRestLogos}>

          <img src={iRedux} className={classes.restLogo} alt='redux logo' />
          <img src={iReactRouter} className={classes.restLogo} alt='react router logo' />
          <img src={iMUI} className={classes.restLogo} alt='material ui logo' />
          <img src={iBootstrap} className={classes.restLogo} alt='bootstrap logo' />
          <img src={iRest} className={classes.restLogo} alt='rest api logo' />
          <img src={iMySql} className={classes.restLogo} alt='material ui logo' />
          <img src={iJS} className={classes.restLogo} alt='javascript logo' />
          <img src={iRamda} className={classes.restLogo} alt='ramda logo' />
          <img src={iNodemon} className={classes.restLogo} alt='nodemon logo' />
          <img src={iMocha} className={classes.restLogo} alt='mocha logo' />
          <img src={iUbuntu} className={classes.restLogo} alt='ubuntu logo' />
          <img src={iAWS} className={classes.restLogo} alt='aws javascript sdk logo' />
          <img src={iWebpack} className={classes.restLogo} alt='webpack logo' />
          <img src={iTravis} className={classes.restLogo} alt='travis ci logo' />
          <img src={iPassport} className={classes.restLogo} alt='passport logo' />
          <img src={iZenHub} className={classes.restLogo} alt='zenhub logo' />
          <img src={iMarkdown} className={classes.restLogo} alt='markdown logo' />
          <img src={iYarn} className={classes.restLogo} alt='yarn logo' />
          <img src={iDrupal} className={classes.restLogo} alt='drupal logo' />
          <img src={iWordpress} className={classes.restLogo} alt='wordpress logo' />
        </div>
    </Section>
  )
}

const styles = {
  restLogo: {
    // marginRight: 5,
    // marginLeft: 5,
    // margin: '1rem 1rem',
    // maxHeight: 70,
    margin: '1rem 0'

  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    // padding: '4rem 4rem'

  },
  theRestLogos: {
    // minHeight: 300,
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    // paddingLeft: '5%',
    // paddingRight: '5%',
    // alignItems: 'center',
  }
}

export default injectSheet(styles)(TheRestSkills)