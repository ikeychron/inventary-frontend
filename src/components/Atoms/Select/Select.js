import React from "react";
import classnames from "classnames";

// Styles
import { NativeSelect } from "@material-ui/core";
import styles from "./styles";

const Select = ({
  type,
  className,
  disabled,
  children,
  placeholder,
  ...rest
}) => {
  const classes = styles();

  const classNames = classnames({
    [classes.default]: true,
    [className]: !!className,
  });

  return (
    <NativeSelect className={classNames} disabled={disabled} {...rest}>
      {placeholder && (
        <option value="" disabled selected>
          {placeholder}
        </option>
      )}

      {children}
    </NativeSelect>
  );
};

export default Select;
