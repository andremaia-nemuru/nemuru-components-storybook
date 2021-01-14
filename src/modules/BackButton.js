import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useMediaQuery, Button, IconButton } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  mobileIconFontSize: PropTypes.string,
};

export default function BackButton({
  children,
  onClick,
  mobileIconFontSize = "36px",
  className,
  ...props
}) {
  const isScreenXs = useMediaQuery(useTheme().breakpoints.down("xs"));
  const propClassName = className ? className : "";
  return (
    <Fragment>
      {isScreenXs ? (
        <IconButton
          onClick={onClick}
          className="p-0"
          {...props}
          style={{ position: "absolute", left: "1.25rem" }}
        >
          <i
            className="material-icons"
            style={{ verticalAlign: "text-top", fontSize: mobileIconFontSize }}
          >
            chevron_left
          </i>
        </IconButton>
      ) : (
        <Button
          size={"small"}
          variant={"outlined"}
          onClick={onClick}
          {...props}
          className={`${propClassName} min-width-button`}
        >
          {children}
          <i
            className="material-icons ml-2"
            style={{ verticalAlign: "text-top", fontSize: "15px" }}
          >
            chevron_left
          </i>
        </Button>
      )}
    </Fragment>
  );
}
