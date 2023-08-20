import React from 'react'
import injectSheet from 'react-jss'
import iMeetup from 'media/logos/meetup-swarm.svg'
import iGithub from 'media/logos/github-octocat.svg'
import iFacebook from 'media/logos/facebook.svg'
import iSlack from 'media/logos/slack.svg'
import iBlog from 'media/blog.png'

const meetupURL = 'https://www.meetup.com/trivalleycoders/'
const gitHubURL = 'https://github.com/klequis'
const facebookURL = 'https://www.facebook.com/groups/free.code.camp.sanramon/'
const blogURL = "https://klequis.io/";

const Footer = ({ classes }) => {
  return (
    <div>
      <div className={classes.inner}>
        <div className={classes.links}>
          <div className={classes.linkRow}>
            <a href={meetupURL}>
              <img src={iMeetup} className={classes.logo} alt="meetup logo" />
            </a>
            <a href={gitHubURL}>
              <img
                src={iGithub}
                className={classes.logo}
                alt="klequis' github"
              />
            </a>
          </div>
          <div className={classes.linkRow}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = theme => ({
  inner: {
    maxWidth: 251,
    marginLeft: 'auto',
    marginRight: 'auto',
    // padding: '3rem 0',
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: 'purple'
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up(500)]: {
      flexDirection: 'row',
    },
  },
  linkRow: {
    display: 'flex',
    justifyContent: 'space-around',
    // eslint-disable-next-line
    justifyContent: 'space-evenly',
    width: '100%',
    // marginBottom: '3rem',
    [theme.breakpoints.up(500)]: {
      justifyContent: 'space-around',
    }
  },
  logo: {
    maxHeight: 30,
  },
})

export default injectSheet(styles)(Footer)
