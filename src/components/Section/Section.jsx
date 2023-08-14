import React from "react";
import * as R from "ramda";
import Text from "components/Text";

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
        color: "black"
      }
    : {
        boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.075)",
        backgroundColor: "#005ca8",
        color: "white"
      };
};

const innerStyle = (flexDirection = "none") => {
  // NEED TO ADD GAP TO THIS
  const flex =
    flexDirection !== "none" ? { display: "flex", flexDirection } : {};
  return R.mergeRight(
    {
      maxWidth: 1180,
      margin: "auto"
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
    title = "none"
  } = props;
  console.log("style", sectionStyle(background));
  return (
    <section id={id} style={sectionStyle(background)}>
      {title !== "none" ? (
        <Text variant="h2" align="center">
          {title}
        </Text>
      ) : null}
      <div style={innerStyle(flexDirection)}>{children}</div>
    </section>
  );
};

export default Section;
