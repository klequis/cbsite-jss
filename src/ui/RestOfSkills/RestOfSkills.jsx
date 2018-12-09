import React from 'react'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import iReactRouter from 'media/logos/react-router.svg'
import iRedux from 'media/logos/redux.svg'
import iMUI from 'media/logos/material-ui.svg'
import iMySql from 'media/logos/mysql.svg'
import iRest from 'media/logos/rest-api.svg'
import iWebpack from 'media/logos/webpack.svg'
import iUbuntu from 'media/logos/ubuntu.svg'
import iPassport from 'media/logos/passport.svg'
import iMocha from 'media/logos/mocha.svg'
import iTravis from 'media/logos/travis-ci.svg'
import iYarn from 'media/logos/yarn.svg'
import iRamda from 'media/logos/ramda.svg'
import iWordpress from 'media/logos/wordpress.svg'
import iMarkdown from 'media/logos/markdown.svg'
import iZenHub from 'media/logos/zenhub.svg'
import iNodemon from 'media/logos/nodemon.svg'
import iDrupal from 'media/logos/drupal.svg'
import iAWS from 'media/logos/aws-sdk-js.svg'
import iJS from 'media/logos/js-es6.svg'
import iBootstrap from 'media/logos/bootstrap.svg'
import Section from 'ui/Section'

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

const styles = theme =>({
  restLogo: {
    margin: '1rem 0.5rem',
    width: 140,
    [theme.breakpoints.up('sm')]: {
      width: 150,
    },
    [theme.breakpoints.up('lg')]: {
      width: 'auto',
    }

  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

  },
  theRestLogos: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
  }
})

export default injectSheet(styles)(TheRestSkills)