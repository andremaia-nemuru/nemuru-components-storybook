import PropTypes from "prop-types";
import React from "react";
import { Typography } from "@material-ui/core";

export default function AccentIcon({ type, size, style, iconName }) {
  const defaultSize = 34;
  const iconSize = size || defaultSize;
  return (
    <div
      style={{
        marginLeft: `-${iconSize}px`,
        height: `${iconSize}px`,
        ...style,
      }}
    >
      <Typography color={"secondary"}>
        <i
          className={`icon-${iconName(type)} mr1`}
          style={{
            verticalAlign: "sub",
            fontSize: `${iconSize}px`,
            position: "absolute",
          }}
        />
      </Typography>
      <Typography color={"primary"}>
        <i
          className={`icon-${iconName(type)}_accent mr1`}
          style={{
            verticalAlign: "sub",
            fontSize: `${iconSize}px`,
            position: "absolute",
          }}
        />
      </Typography>
    </div>
  );
}

AccentIcon.propTypes = {
  size: PropTypes.number,
  type: PropTypes.string.isRequired,
};
