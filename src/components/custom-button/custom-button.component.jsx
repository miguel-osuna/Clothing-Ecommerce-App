import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./custom-button.styles.scss";

const propTypes = {
  children: PropTypes.node,
  isGoogleSignIn: PropTypes.bool,
  otherProps: PropTypes.object,
};

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  let btnClass = classNames({
    "custom-button": true,
    'inverted-color': inverted,
    "google-sign-in": isGoogleSignIn,
  });

  return (
    <button className={btnClass} {...otherProps}>
      {children}
    </button>
  );
};

CustomButton.propTypes = propTypes;

export default CustomButton;
