import React from "react";
import { makeStyles } from "@material-ui/core";
import classnames from "classnames";

const GridFluid = ({ children, className, ...rest }) => {
  // Styles
  const styles = makeStyles(Theme => ({
    default: {
      display: "flex",
      flexWrap: "wrap",
    }
  }));

  const classes = styles();

  const classNames = classnames({
    [classes.default]: true,
    [className]: !!className
  });

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

export default GridFluid;
