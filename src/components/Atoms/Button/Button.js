import React from "react";
import classnames from "classnames";
import { get } from "lodash";
import { Button as ButtonBase } from "@material-ui/core";

// Styles
import styles from "./styles";

const Button = ({
  type,
  theme,
  className,
  children,
  disabled,
  onClick,
  ...rest
}) => {
  const classes = styles();

  const classNames = classnames({
    [get(classes, theme, classes.default)]: true,
    [className]: !!className,
  });

  return (
    <ButtonBase
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={!disabled ? onClick : () => {}}
      variant={theme}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
};

Button.defaultProps = {
  disabled: false,
  theme: "contained",
};

export default Button;
