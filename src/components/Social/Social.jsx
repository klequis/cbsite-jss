import React from "react";
import injectSheet from "react-jss";
import iGithub from "media/logos/github-octocat.svg";
import iBlog from "media/blog.png";
import iLinkedIn from "media/logos/linkedIn.png";

const linkedInURL = "https://www.linkedin.com/in/carlbecker/";
const gitHubURL = "https://github.com/klequis";
// const facebookURL = "https://www.facebook.com/groups/free.code.camp.sanramon/";
const blogURL = "https://klequis.io/";

const Social = ({ classes }) => {
  return (
    <div className={classes.outer}>
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
    </div>
  );
};

const styles = theme => ({
  outer: {
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0
  },
  inner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    maxWidth: 251,
    marginLeft: "auto",
    marginRight: "auto",
    // backgroundColor: 'purple'
  },
  logo: {
    maxHeight: 40
  }
});

export default injectSheet(styles)(Social);
