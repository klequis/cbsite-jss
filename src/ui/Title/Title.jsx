import React from "react";
import injectSheet from "react-jss";
import Text from "components/Text";
import Section from "components/Section";
import Social from "components/Social"

const Title = ({ classes }) => {
  return (
    <Section background="blue">
      <header>
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
        <Social />
      </header>
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
