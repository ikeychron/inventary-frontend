import React, { useState } from "react";

import { FiMenu, FiX } from "react-icons/fi";

// Components
import Text from "../../Atoms/Text";
import Link from "../../Atoms/Link";

// styles
import Palette from "../../../theme/palette";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
  },
  menuButton: {
    color: theme.palette.text.white,
    marginRight: theme.spacing(2),
  },
  title: {
    color: theme.palette.text.white,
    flexGrow: 1,
  },
  button: {
    color: theme.palette.text.white,
    marginLeft: "1rem",
  },
  navbar: {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <FiMenu />
          </IconButton>
          <Text variant="h6" className={classes.title}>
            Sistema de Inventario
          </Text>
          <Button color="inherit" className={classes.button}>
            Cerrar Sesión
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
