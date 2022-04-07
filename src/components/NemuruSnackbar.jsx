import React from "react";
import {IconButton, Snackbar} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

/* WIP!! WARNING*/
export default function NemuruSnackbar({
  open,
  autoHide = false,
  onClose,
  message,
  errorObject = {},
  onClick = () => {},
  level,
  errorSubMessage,
  ...props
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHide ? 5000 : 999999999}
      onClose={autoHide ? onClose : () => {}}
      message={!level && message}
      onClick={onClick}
      {...props}
    >
      {level && (
        <Alert
          severity={level}
          action={
            !autoHide && (
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={onClose}
              >
                <i
                  className="material-icons"
                  style={{ verticalAlign: "text-top", fontSize: "24px" }}
                >
                  close
                </i>
              </IconButton>
            )
          }
        >
          <div>
            <strong>{message}</strong>
          </div>
          {level === "error" && (
            <small>
              {errorSubMessage}
            </small>
          )}
        </Alert>
      )}
    </Snackbar>
  );
}
