import React, { useState } from "react";
import classnames from "classnames";
import { omit } from "lodash";

// Styles
import { TextField } from "@material-ui/core";
import styles from "./styles";

const Input = ({ type, value, onChange, className, disabled, ...rest }) => {
  const [valueState, setValueState] = useState("");

  const classes = styles();
  const addValue = e => onChange(e);

  const _onChange = ({ target }) => {
    if (value !== (undefined || null)) {
      addValue(target.value);
    } else {
      setValueState(target.value, addValue(target.value));
    }
  };

  const classNames = classnames({
    [classes.default]: true,
    [className]: !!className
  });

  return (
    <TextField
      className={classNames}
      type={type}
      onChange={_onChange}
      disabled={disabled}
      value={value !== (undefined || null) ? value : valueState}
      {...omit(rest, ["onChange"])}
    />
  );
};

Input.defaultProps = {
  onChange: () => {}
};

export default Input;
