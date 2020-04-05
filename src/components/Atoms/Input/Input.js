import React, { useState } from "react";
import classnames from "classnames";

// Styles
import { TextField } from "@material-ui/core";
import styles from "./styles";

const Input = ({ type, value, className, disabled, ...rest }) => {
  const classes = styles();

  const classNames = classnames({
    [classes.default]: true,
    [className]: !!className,
  });

  return (
    <TextField
      className={classNames}
      type={type}
      disabled={disabled}
      {...rest}
    />
  );
};
export default Input;
