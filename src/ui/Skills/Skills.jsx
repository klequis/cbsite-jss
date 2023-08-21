import React from "react";
// import Text from 'components/Text'
import injectSheet from "react-jss";
import Section from "components/Section";
// --
import iAWS from "media/logos/aws-sdk-js.svg";
import iBootstrap from "media/logos/bootstrap.svg";
import iDrupal from "media/logos/drupal.svg";
import iExpress from "media/logos/express-light.svg";
import iJS from "media/logos/js-es6.svg";
import iMocha from "media/logos/mocha.svg";
import iMongoDB from "media/logos/mongodb-dark.svg";
import iMUI from "media/logos/material-ui.svg";
import iMySql from "media/logos/mysql.svg";
import iNextJS from "media/logos/next.svg";
import iNode from "media/logos/node-light.new.svg";
import iRamda from "media/logos/ramda.svg";
import iReact from "media/logos/react.svg";
import iRedux from "media/logos/redux.svg";
import iRest from "media/logos/rest-api.svg";
import iStyledComponents from "media/logos/styled-components-6.png";
import iTravis from "media/logos/travis-ci.svg";
import iUbuntu from "media/logos/ubuntu.svg";
import iWebpack from "media/logos/webpack.svg";
import iWordpress from "media/logos/wordpress.svg";
// 
import iResponsive from 'media/responsive.svg'

const Skills = props => {
  const { classes } = props;
  return (
    <Section
      flexDirection="column"
      background="white"
      gap="1em"
      title="Software Developer"
    >
      <div className={classes.topDiv}>
        <img
          src={iResponsive}
          className={classes.iResponsive}
          alt="images of "
        />
      </div>
      <div className={classes.bottomDiv}>
        <div className={classes.rightInnerDiv}>
          <img src={iAWS} className={classes.logo} alt="aws javascript sdk logo" />
          <img src={iBootstrap} className={classes.logo} alt="bootstrap logo" />
          <img src={iDrupal} className={classes.logo} alt="drupal logo" />
          <img src={iExpress} className={classes.logo} alt="Express JS logo" />
          <img src={iJS} className={classes.logo} alt="javascript logo" />
          <img src={iMUI} className={classes.logo} alt="material ui logo" />
          <img src={iMocha} className={classes.logo} alt="mocha logo" />
          <img src={iMongoDB} className={classes.logo} alt="mongoDB logo" />
          <img src={iMySql} className={classes.logo} alt="material ui logo" />
          <img src={iNextJS} className={classes.logo} alt="next js logo" />
          <img src={iNode} className={classes.logo} alt="node js logo" />
          <img src={iRamda} className={classes.logo} alt="ramda logo" />
          <img src={iReact} className={classes.logo} alt="react js logo" />
          <img src={iRedux} className={classes.logo} alt="redux logo" />
          <img src={iRest} className={classes.logo} alt="rest api logo" />
          <img
            src={iStyledComponents}
            className={classes.logo}
            alt="styled components logo"
          />
          <img src={iTravis} className={classes.logo} alt="travis ci logo" />
          <img src={iUbuntu} className={classes.logo} alt="ubuntu logo" />
          <img src={iWebpack} className={classes.logo} alt="webpack logo" />
          <img src={iWordpress} className={classes.logo} alt="wordpress logo" />
        </div>
      </div>
    </Section>
  );
};


const styles = theme => ({
  topDiv: {
    marginBottom: "7%",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {}
  },
  bottomDiv: {
    margin: "0 auto 0 auto",
    width: "90%"
  },
  logo: {
    width: "40%",
    // background: "gray",
    [theme.breakpoints.up("md")]: {
      maxWidth: 170
    },
    [theme.breakpoints.up("sm")]: {
      // width: 5,
    },
    [theme.breakpoints.up("lg")]: {}
  },
  rightInnerDiv: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    gap: "0.5em",
    [theme.breakpoints.up("sm")]: {
      gap: "1em"
      // background: "purple"
    },
    [theme.breakpoints.up("lg")]: {
      gap: "2em"
      // background: "orange"
    }
  },
  iResponsive: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "40%"
  },
  restLogo: {
    width: 140,
    [theme.breakpoints.up("sm")]: {
      width: 150
    },
    [theme.breakpoints.up("lg")]: {
      // width: "auto"
      // width: 175
    },
    // maxHeight: 193.333,
    border: "1px solid white"
  }
});

export default injectSheet(styles)(Skills);
