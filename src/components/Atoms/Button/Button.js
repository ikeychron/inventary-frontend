import React from "react";
import classnames from "classnames";
import { Button as ButtonBase } from "@material-ui/core";

// Styles
import styles from "./styles";

const Button = ({
  type,
  className,
  children,
  disabled,
  onClick,
  ...rest
}) => {
  const classes = styles();

  const classNames = classnames({
    [classes.default]: true,
    [className]: !!className
  });

  return (
    <ButtonBase
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={!disabled ? onClick : () => {}}
      variant="contained"
      {...rest}
    >
      {children}
    </ButtonBase>
  );
};

Button.defaultProps = {
  disabled: false
};

export default Button;
