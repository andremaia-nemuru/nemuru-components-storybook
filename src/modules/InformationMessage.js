import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

import { useTheme } from "@material-ui/styles";
import { IconWithCircle } from "nemuru-components";

export default function InformationMessage({
  variant,
  isScreenXs,
  messageContent,
}) {
  const { palette: themePalette } = useTheme();

  return (
    variant && (
      <Box
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        fullWidth
      >
        <Box style={{ top: isScreenXs ? 16 : 24, position: "relative" }}>
          <IconWithCircle
            backgroundColor={themePalette[variant.type].main}
            height={isScreenXs ? 26 : 40}
            width={isScreenXs ? 26 : 40}
            className="material-icons"
            style={{
              fontSize: isScreenXs ? 16 : 24,
              color: themePalette.secondary.contrastText,
            }}
          >
            {variant.icon}
          </IconWithCircle>
        </Box>
        <Box
          container
          fullWidth
          bgcolor={themePalette[variant.type].light}
          style={{
            borderRadius: 8,
            paddingTop: isScreenXs ? 10 : 24,
            paddingBottom: 10,
            width: "100%",
          }}
        >
          <Grid container justify="center" spacing={0}>
            <Grid item>
              {isScreenXs ? null : (
                <Typography
                  variant="subtitle2"
                  align="center"
                  style={{
                    color: themePalette.secondary.main,
                    paddingInline: "20px",
                  }}
                >
                  <strong>{messageContent?.title}</strong>
                </Typography>
              )}

              <Grid
                item
                style={{
                  paddingInline: "20px",
                  paddingBlock: "13px",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="caption"
                  align="center"
                  style={{
                    color: themePalette.secondary.main,
                  }}
                >
                  {messageContent?.body}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    )
  );
}
