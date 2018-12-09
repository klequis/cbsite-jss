import React from 'react'
import injectSheet from 'react-jss'
import Section from 'ui/Section'
import iMeetup from 'media/logos/meetup-swarm.svg'
import iGithub from 'media/logos/github-octocat.svg'
import iFacebook from 'media/logos/facebook.svg'
import iSlack from 'media/logos/slack.svg'
import iContact from 'media/contact02.svg'

const Footer = ({ classes }) => {
  return (
    <section className={classes.wrapper}>
      <a href="https://www.meetup.com/trivalleycoders/"><img src={iMeetup} className={classes.logo} alt='meetup logo' /></a>
      <a href="https://github.com/klequis"><img src={iGithub} className={classes.logo} alt="klequis' github" /></a>
      <a href="https://www.facebook.com/groups/free.code.camp.sanramon/"><img src={iFacebook} className={classes.logo} alt='tri valley coders facebook' /></a>
      <a href="https://join.slack.com/t/trivalleycoders/shared_invite/enQtMjk2NDY3NDAwMjI1LWU0YjFjNjE5MDgwYzYwYmUwMWJlNjk1NDU4YmI5ZmZjZGU0ZDcwY2E2Y2RlNmU0MWFlZTUyODFkYzM1NGVlYTQ"><img src={iSlack} className={classes.logo} alt='tri valley coders slack' /></a>
      <div className={classes.contact}>
        <img src={iContact} className={classes.contactIcon} alt='contact carl' />
        <span className={classes.contactEmail}>carl@trivalleycoders.com</span>
      </div>
    </section>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '3rem 0',
    backgroundColor: '#24292e',
  },
  logo: {
    maxHeight: 60,
  },
  contact: {
    display: 'flex',
    flexDirection: 'column'
  },
  contactIcon: {
    maxHeight: 20,
  },
  contactEmail: {
    color: 'white',
    fontWeight: 500,
    marginTop: '1rem',
  },
}
export default injectSheet(styles)(Footer)
