import React from "react";
import injectSheet from "react-jss";
import Text from "components/Text";
import Section from "components/Section";
import iLinkedIn from "media/logos/linkedIn.png";
import iGithubOctocat from "media/logos/github-octocat.svg";
import iBlog from "media/blog.png";

const Title = ({ classes }) => {
  return (
    <Section background="blue">
      <div>
        <Text
          variant="h1"
          align="center"
          marginBottom={0}
          className={classes.h1}
        >
          Carl Becker
        </Text>
        <Text variant="h3" align="center" className={classes.h2}>
          Software Developer
        </Text>
        <div className={classes.linkedInDiv}>
          <a
            href="https://www.linkedin.com/in/carlbecker/"
            className={classes.a}
          >
            <img
              src={iLinkedIn}
              alt="linkedin logo"
              className={classes.linkedInLogo}
            />
          </a>
          <a href="https://github.com/klequis">
            <img
              src={iGithubOctocat}
              alt="github logo"
              className={classes.githubLogo}
            />
          </a>
          <a href="https://klequis.io">
            <img
              src={iBlog}
              alt="klequis blog logo"
              className={classes.githubLogo}
            />
          </a>
        </div>
      </div>
    </Section>
  );
};

const styles = theme => {
  return {
    h1: {
      marginBottom: 0
    },
    h2: {
      marginTop: ".25em",
      marginBottom: ".5em"
    },
    bRed: {
      backgroundColor: "red"
    },
    bGreen: {
      backgroundColor: "green"
    },
    bBlue: {
      backgroundColor: "green"
    },
    image: {
      [theme.breakpoints.up("lg")]: {
        marginTop: 70
      }
    },
    text: {
      marginBottom: "3.5em"
    },
    logo: {
      maxHeight: "3rem",

      [theme.breakpoints.up("md")]: {
        maxHeight: "4rem"
      },
      [theme.breakpoints.up("xl")]: {
        maxHeight: "3.75rem"
      }
    },
    linkedInDiv: {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      gap: "5%"
    },
    linkedInLogo: {
      height: "2em"
    },
    githubLogo: {
      height: "2em"
    },
    a: {
      margin: 0,
      padding: 0
    },
    logoGroup: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-around",
      // eslint-disable-next-line
      justifyContent: "space-evenly",
      marginTop: "2em",
      [theme.breakpoints.up("lg")]: {}
    }
  };
};

export default injectSheet(styles)(Title);
