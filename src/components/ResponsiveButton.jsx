
import React from "react";
import {Badge, Box, Button} from "@material-ui/core";

export default function  /*#__PURE__*/  ResponsiveButton({
  onClick,
  variant = "outlined",
  color = "secondary",
  size = "small",
  className,
    text,
  iconName,
    isMobile,
  ...props
}) {
  const propClassName = className ? className : "";
  return (
    <Button
      size={size}
      variant={variant}
      color={color}
      onClick={onClick}
      {...props}
      className={`${propClassName} ${isMobile ? "" : "min-width-button"}`}
    >
      <Badge/>
      <Box display="flex" alignItems="center">
        {!isMobile && text}
        <i
          className={`material-icons ${isMobile ? "" : "ml-2"}`}
          style={{ verticalAlign: "text-top", fontSize: "15px" }}
        >
          {iconName}
        </i>
      </Box>
    </Button>
  );
}
