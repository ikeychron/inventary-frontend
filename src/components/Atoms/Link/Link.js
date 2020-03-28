import React from "react";
import classnames from "classnames";
import { NavLink as RouteLink } from "react-router-dom";

import styles from "./styles";

const Link = ({
  href,
  to,
  label,
  children,
  className,
  disabled,
  ...rest
}) => {
  const classes = styles();

  const classNames = classnames({
    [classes.default]: true,
    [styles.disabled]: disabled,
    [className]: !!className
  });

  if (to) {
    return (
      <RouteLink
        to={!disabled ? to : null}
        className={classNames}
        {...rest}
        style={{ fontWeight: 500 }}
        activeStyle={{ color: "0083df", fontWeight: "bold" }}
      >
        {children}
      </RouteLink>
    );
  }

  return (
    <a
      href={!disabled ? href : null}
      className={classNames}
      {...rest}
      style={{ fontWeight: 500 }}
    >
      {children}
    </a>
  );
};

export default Link;
