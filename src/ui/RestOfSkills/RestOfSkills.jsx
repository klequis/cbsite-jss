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

const shadowStyle = {
  boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.075)',
}

const TheRestSkills = (props) => {
  const { classes } = props
  return (
    <div
        className={classes.wrapper}
        elevation={0}
        style={shadowStyle}
      >
      <Text variant='h2'>Current Toolkit</Text>
      <div className={classes.theRestLogos}>
          <ResponsiveImage src={iAWS} className={classes.restLogo} alt='aws javascript sdk logo' />
          <ResponsiveImage src={iRedux} className={classes.restLogo} alt='redux logo' />
          <ResponsiveImage src={iReactRouter} className={classes.restLogo} alt='react router logo' />
          <ResponsiveImage src={iMUI} className={classes.restLogo} alt='material ui logo' />
          <ResponsiveImage src={iBootstrap} className={classes.restLogo} alt='bootstrap logo' />
          <ResponsiveImage src={iRest} className={classes.restLogo} alt='rest api logo' />
          <ResponsiveImage src={iMySql} className={classes.restLogo} alt='material ui logo' />
          <ResponsiveImage src={iJS} className={classes.restLogo} alt='javascript logo' />
          <ResponsiveImage src={iRamda} className={classes.restLogo} alt='ramda logo' />
          <ResponsiveImage src={iNodemon} className={classes.restLogo} alt='nodemon logo' />
          <ResponsiveImage src={iMocha} className={classes.restLogo} alt='mocha logo' />
          <ResponsiveImage src={iWebpack} className={classes.restLogo} alt='webpack logo' />
          <ResponsiveImage src={iUbuntu} className={classes.restLogo} alt='ubuntu logo' />
          <ResponsiveImage src={iTravis} className={classes.restLogo} alt='travis ci logo' />
          <ResponsiveImage src={iPassport} className={classes.restLogo} alt='passport logo' />
          <ResponsiveImage src={iZenHub} className={classes.restLogo} alt='zenhub logo' />
          <ResponsiveImage src={iMarkdown} className={classes.restLogo} alt='markdown logo' />
          <ResponsiveImage src={iYarn} className={classes.restLogo} alt='yarn logo' />
          <ResponsiveImage src={iDrupal} className={classes.restLogo} alt='drupal logo' />
          <ResponsiveImage src={iWordpress} className={classes.restLogo} alt='wordpress logo' />
        </div>
    </div>
  )
}

const styles = {
  restLogo: {
    // marginRight: 5,
    // marginLeft: 5,
    margin: '1rem 1rem',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '4rem 0'
  },
  theRestLogos: {
    // minHeight: 300,
    display: 'flex',
    // flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    // paddingLeft: '5%',
    // paddingRight: '5%',
    // alignItems: 'center',
  }
}

export default injectSheet(styles)(TheRestSkills)