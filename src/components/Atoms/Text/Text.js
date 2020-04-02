import React from "react";
import classnames from "classnames";
import { get } from "lodash";
import { Typography } from "@material-ui/core";

import styles from "./styles";

const Text = ({ component, theme, className, children, ...rest }) => {
  const classes = styles();

  const classNames = classnames({
    [get(classes, theme, "default")]: true,
    [className]: !!className,
  });

  return (
    <Typography component={component} className={classNames} {...rest}>
      {children}
    </Typography>
  );
};

Text.defaultProps = {
  className: "",
  theme: "default",
  component: "p",
};

export default Text;
