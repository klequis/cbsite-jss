import React from "react";
import injectSheet from "react-jss";
import Text from "components/Text";
import Section from "components/Section";
import Social from "components/Social";

const Title = ({ classes }) => {
  return (
    <header className={classes.header}>
      <Text variant="h1" align="center" marginBottom={0} className={classes.h1}>
        Carl Becker
      </Text>
      <Social />
    </header>
  );
};

const styles = theme => {
  return {
    header: {
      boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.075)",
      backgroundColor: "#005ca8",
      color: "white",
      paddingTop: '4em',
      paddingBottom: '4em'
    },
    h1: {
      marginBottom: '1em'
      // backgroundColor: 'green',
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
    save1: {
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
