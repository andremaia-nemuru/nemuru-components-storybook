import React from "react";
import PropTypes from "prop-types";
import { Dialog, IconButton } from "@material-ui/core";
import ConditionalWrapper from "./ConditionalWrapper";

ResponsiveDialog.propTypes = {
  loading: PropTypes.bool,
  displayCondition: PropTypes.bool,
  fullScreenCondition: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default function ResponsiveDialog({
  children,
  loading = false,
  displayCondition,
  fullScreenCondition,
  onClose,
  ...props
}) {
  return (
    <ConditionalWrapper
      condition={displayCondition}
      wrapper={(children) => (
        <Dialog fullScreen={fullScreenCondition} {...props}>
          {children}
        </Dialog>
      )}
    >
      {!loading && displayCondition && (
        <IconButton
          aria-label="close"
          onClick={onClose}
          style={{ position: "absolute", right: ".5rem", top: "1rem" }}
        >
          <i
            className="material-icons"
            style={{ verticalAlign: "text-top", fontSize: "24px" }}
          >
            close
          </i>
        </IconButton>
      )}
      {children}
    </ConditionalWrapper>
  );
}
