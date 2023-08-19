import React from "react";
import * as R from "ramda";
import Text from "components/Text";
import injectSheet from "react-jss";


const bgColorWhite = "white";
const bgColorBlue = "blue";

/**
 *
 * @param {string} bgColor bgColorWhite || bgColorBlue
 * @returns
 */
const sectionStyle = (bgColor = bgColorWhite) => {
  return bgColor === bgColorWhite
    ? {
        boxShadow: "inset 0 1px 0 0 rgba(0, 0, 0, 0.15)",
        backgroundColor: "white",
        color: "black",
        backgroundColor: 'red'
      }
    : {
        boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.075)",
        backgroundColor: "#005ca8",
        color: "white",
        backgroundColor: 'red'
      };
};

const innerStyle = (flexDirection = "none") => {
  const flex =
    flexDirection !== "none" ? { display: "flex", flexDirection } : {};
  return R.mergeRight(
    {
      maxWidth: 1180,
      margin: "auto",
      backgroundColor: 'green'
    },
    flex
  );
};

const Section = props => {
  const {
    children,
    classes,
    className,
    background = bgColorBlue,
    flexDirection,
    id,
    gap,
    theme,
    title = "none"
  } = props;
  // console.log("style", sectionStyle(background));
  console.log('theme', theme)
  return (
    <section id={id} className={classes.wrapper} style={sectionStyle(background)}>
      {title !== "none" ? (
        <Text variant="h2" align="center">
          {title}
        </Text>
      ) : null}
      <div style={innerStyle(flexDirection)}>{children}</div>
    </section>
  );
};

const styles = theme => ({
  wrapper: theme.section.xs,
});

export default injectSheet(styles)(Section);
