import React from "react";
import { makeStyles } from "@material-ui/core";
import classnames from "classnames";

const GridFluid = ({
  columns,
  rows,
  spacing,
  children,
  className,
  ...rest
}) => {
  // Styles
  const styles = makeStyles((Theme) => ({
    default: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: columns,
      gridTemplateRows: rows,
      gridGap: `${spacing}`,
      alignItems: "flex-start",
      justifyContent: "center",

      [Theme.breakpoints.down("sm")]: {
        display: "contents",
        gridTemplateColumns: "auto",
        gridTemplateRows: "auto",
      },
    },
  }));

  const classes = styles();

  const classNames = classnames({
    [classes.default]: true,
    [className]: !!className,
  });

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

GridFluid.defaultProps = {
  columns: "auto",
  rows: "auto",
  spacing: "auto",
};

export default GridFluid;
