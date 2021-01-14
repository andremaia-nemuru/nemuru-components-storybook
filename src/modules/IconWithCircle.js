import React from "react";
import { Box } from "@material-ui/core";

export default function IconWithCircle({
  children,
  backgroundColor,
  height = 16,
  width = 16,
  ...props
}) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="100%"
      height={height}
      width={width}
      bgcolor={backgroundColor}
    >
      <i {...props}>{children}</i>
    </Box>
  );
}
