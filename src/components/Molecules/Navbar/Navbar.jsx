import React from "react";

import { FiMenu } from "react-icons/fi";

// Components
import Text from "../../Atoms/Text";
import Link from "../../Atoms/Link";
import Button from "../../Atoms/Button";

// styles
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  menuButton: {
    color: theme.palette.text.white,
    marginRight: theme.spacing(2),
  },
  title: {
    color: theme.palette.text.white,
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position={window.innerWidth <= "768" ? "fixed" : "static"}
        className={classes.navbar}
      >
        <Toolbar>
          {window.innerWidth <= "768" && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <FiMenu />
            </IconButton>
          )}
          <Link className={classes.title}>Sistema de Inventario</Link>
          <Button theme="flat">Cerrar Sesión</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
