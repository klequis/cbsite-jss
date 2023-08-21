import React from 'react'
import injectSheet from 'react-jss'
import iGithub from "media/logos/github-octocat.svg";
import iBlog from "media/blog.png";
import iLinkedIn from "media/logos/linkedIn.png";

const linkedInURL = "https://www.linkedin.com/in/carlbecker/";
const gitHubURL = "https://github.com/klequis";
// const facebookURL = "https://www.facebook.com/groups/free.code.camp.sanramon/";
const blogURL = "https://klequis.io/";

const Footer = ({ classes }) => {
  return (
    <footer className={classes.wrapper}>
      <div className={classes.inner}>
        <a href={gitHubURL}>
          <img src={iGithub} className={classes.logo} alt="klequis' github" />
        </a>

        {/* <a href={facebookURL}>
              <img
                src={iFacebook}
                className={classes.logo}
                alt="tri valley coders facebook"
              />
            </a> */}
        <a href={blogURL}>
          <img
            src={iBlog}
            className={classes.logo}
            alt="tri valley coders slack"
          />
        </a>
        <a href={linkedInURL}>
          <img
            src={iLinkedIn}
            className={classes.logo}
            alt="tri valley coders slack"
          />
        </a>
      </div>
    </footer>
  )
}

const styles = theme => ({
  wrapper: {
    backgroundColor: "#24292e"
  },
  inner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    maxWidth: 751,
    marginLeft: "auto",
    marginRight: "auto",
    padding: "3rem 0",
    display: "flex"
  },
  save1: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up(500)]: {
      flexDirection: "row"
    }
  },
  save2: {
    display: "flex",
    justifyContent: "space-around",
    // eslint-disable-next-line
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: "3rem",
    [theme.breakpoints.up(500)]: {
      justifyContent: "space-around"
    }
  },
  logo: {
    maxHeight: 50
  },
  contact: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
});

export default injectSheet(styles)(Footer)
