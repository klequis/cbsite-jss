import React from "react";
import injectSheet from "react-jss";
import iLinkedIn from "media/logos/linkedIn.png";
import iGithubOctocat from "media/logos/github-octocat.svg";
import iBlog from "media/blog.png";

const Social = ({ classes }) => {
  return (
    <div className={classes.linkedInDiv}>
      <a href="https://www.linkedin.com/in/carlbecker/" className={classes.anchor}>
        <img
          src={iLinkedIn}
          alt="linkedin logo"
          className={classes.logo}
        />
      </a>
      <a href="https://github.com/klequis">
        <img
          src={iGithubOctocat}
          alt="github logo"
          className={classes.logo}
        />
      </a>
      <a href="https://klequis.io">
        <img
          src={iBlog}
          alt="klequis blog logo"
          className={classes.logo}
        />
      </a>
    </div>
  );
}

const styles = theme => {
  return {
    anchor: {
      margin: 0,
      padding: 0
    },
    // linkedInLogo: {
    //   height: "2em"
    // },
    // githubLogo: {
    //   height: "2em"
    // },
    linkedInDiv: {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      gap: "5%"
    },
    logo: {
      maxHeight: "3rem",

      [theme.breakpoints.up("md")]: {
        maxHeight: "4rem"
      },
      [theme.breakpoints.up("xl")]: {
        maxHeight: "3.75rem"
      }
    }
  };
}

export default injectSheet(styles)(Social);