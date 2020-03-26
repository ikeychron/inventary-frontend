import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { Button as ButtonBase } from "@material-ui/core";

// Styles
import styles from './styles'

const Button = ({
  type,
  className,
  children,
  disabled,
  onClick,
  to,
  ...rest
}) => {
  const classes = styles();

  const classNames = classnames({
    [classes.default]: true,
    [className]: !!className
  });

  const renderLink = classNames => (
    <Link className={classNames} to={to}>
      {children}
    </Link>
  );

  return to ? (
    renderLink(classNames)
  ) : (
    <ButtonBase
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={!disabled ? onClick : () => {}}
      variant='contained'
      {...rest}
    >
      {children}
    </ButtonBase>
  );
};

Button.defaultProps = {
  disabled: false
}

export default Button;
