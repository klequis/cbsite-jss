import React from "react";
import injectSheet from "react-jss";
import classNames from "classnames";
import PropTypes from "prop-types";


function mkClasses(classes, className, flexDirection) {
  
}

const Section = props => {
  console.log("props", props);
  const {
    children,
    classes,
    className,
    background = "light",
    // isFlexContainer = false,
    // flexDirection
  } = props;
  const clsNames = classNames(
    {
      [classes.dark]: background === "dark",
      // [classes.inner]: isFlexContainer

    },
    [[classes.wrapper], className]
  );

  return (
    <section className={clsNames}>
      <div className={classes.inner}>{children}</div>
    </section>
  );
};

const styles = theme => ({
  wrapper: theme.section.xs,
  inner: {
    // display: "flex",
    // alignContent: "stretch",
    maxWidth: 1180,
    margin: "auto"
  },
  dark: {
    // backgroundColor: '#2b3137',
    backgroundColor: theme.section.colors.background.dark,
    color: "white",
    boxShadow: theme.section.shadow.dark
  }
});

export default injectSheet(styles)(Section);

Section.propTypes = {
  children: PropTypes.object.isRequired,
  classes: PropTypes.object,
  className: PropTypes.object,
  background: PropTypes.string,
  // isFlexContainer: PropTypes.bool,
  // flexDirection: PropTypes.string
};
