import React, { useState } from "react";
import classnames from "classnames";
import { omit } from "lodash";

// Styles
import { NativeSelect } from "@material-ui/core";
import styles from "./styles";

const Select = ({
  type,
  value,
  onChange,
  className,
  disabled,
  children,
  placeholder,
  ...rest
}) => {
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
    <NativeSelect
      className={classNames}
      onChange={_onChange}
      disabled={disabled}
      value={value !== (undefined || null) ? value : valueState}
      {...omit(rest, ["onChange"])}
    >
      {placeholder && (
        <option value="" disabled selected>
          {placeholder}
        </option>
      )}

      {children}
    </NativeSelect>
  );
};

Select.defaultProps = {
  onChange: () => {}
};

export default Select;
