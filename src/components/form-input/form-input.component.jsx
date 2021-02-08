import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./form-input.styles.scss";

const propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
  otherProps: PropTypes.object,
};

const FormInput = ({ handleChange, label, ...otherProps }) => {
  let labelClass = classNames({
    "form-input-label": true,
    shrink: otherProps.value.length,
  });

  return (
    <div className="group">
      {label ? <label className={labelClass}>{label}</label> : null}
      <input className="form-input" onChange={handleChange} {...otherProps} />
    </div>
  );
};

FormInput.propTypes = propTypes;

export default FormInput;
