import React, { Fragment } from "react";
import PropTypes from "prop-types";

ConditionalWrapper.propTypes = {
  condition: PropTypes.bool,
  wrapper: PropTypes.func.isRequired,
};

export default function ConditionalWrapper({ condition, wrapper, children }) {
  return <Fragment>{condition ? wrapper(children) : children}</Fragment>;
}
