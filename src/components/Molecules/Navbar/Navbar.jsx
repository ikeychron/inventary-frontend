import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Actions
import { openSidebar } from "../../../store/actions/layoutActions";

// Icons
import { FiMenu } from "react-icons/fi";

// Components
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

const Navbar = ({ openSidebar, history }) => {
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
              onClick={openSidebar}
            >
              <FiMenu />
            </IconButton>
          )}
          <Link to="/" className={classes.title}>
            Sistema de manejo de Inventario e Historias Médicas
          </Link>
          <Button theme="flat" onClick={() => history.push("/")}>
            Cerrar Sesión
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapDispatchToProps = {
  openSidebar,
};

export default withRouter(connect(null, mapDispatchToProps)(Navbar));
