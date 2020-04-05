import React from "react";
import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

// Molecules
import Navbar from "../../Molecules/Navbar";
import Sidebar from "../../Molecules/Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    maxHeight: "100vh",
    display: "flex",
  },
  wrapper: {
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  container: {
    margin: "3rem 2rem 0 2rem",

    [theme.breakpoints.down("md")]: {
      margin: "5rem 3rem 2rem 3rem",
    },
  },
}));

const Container = ({ children, className }) => {
  const classes = useStyles();

  const classNames = classnames({
    [classes.container]: true,
    [className]: !!className,
  });

  return (
    <div className={classes.root}>
      <Sidebar />
      <div className={classes.column}>
        <Navbar />
        <div className={classes.wrapper}>
          <div className={classNames}>{children}</div>
        </div>
      </div>
    </div>
  );
};
export default Container;
