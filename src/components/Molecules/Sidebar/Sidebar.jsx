import React from "react";
import { connect } from "react-redux";
import { Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Icons
import { GiMedicines } from "react-icons/gi";
import { FaRegCopy, FaRegFileAlt } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";

// Atoms
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import Link from "../../Atoms/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    height: "100%",
    width: 250,
  },
  tabs: {
    width: "100%",
    backgroundColor: theme.palette.primary.ultraDark,
    boxShadow: "0px 8px 12px 0 rgba(0, 0, 0, 0.4)",
  },
  link: {
    height: 50,
    width: "100%",
  },
  button: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 0,
  },
  label: {
    color: theme.palette.text.white,
    fontSize: 15,
    textAlign: "left",
  },
  icon: {
    width: "23px",
    height: "23px",
    margin: 5,
    marginRight: 15,
  },
  img: {
    width: "100px",
    margin: 2,
  },
  tabHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "2rem",
  },
  title: {
    fontWeight: "bold",
    fontSize: "18px",
    textAlign: "center",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: "12px",
    marginTop: 5,
    textAlign: "center",
  },
  div: {
    margin: "1rem 0",
    padding: "1rem 0",
    backgroundColor: theme.palette.primary.dark,

    [theme.breakpoints.down("md")]: {
      margin: "3rem 0 1rem 0",
      padding: "1rem",
    },
  },
}));

const Sidebar = ({ open }) => {
  const classes = useStyles();

  return (
    <Slide
      direction="right"
      in={window.innerWidth <= "768" ? open : true}
      timeout={window.innerWidth <= "768" ? (1000, 1000) : 0}
    >
      <div className={classes.root}>
        <div className={classes.tabs}>
          <div className={classes.tabHeader}>
            <div className={classes.div}>
              <Text theme="title" component="h6" className={classes.title}>
                Juan Carlos Barrios Sánchez
              </Text>
              <Text theme="label" className={classes.subtitle}>
                juanbarrios045@gmail.com
              </Text>
            </div>
          </div>

          <Link className={classes.link}>
            <Button theme="flat" className={classes.button}>
              <FaRegFileAlt className={classes.icon} />{" "}
              <Text theme="label" className={classes.label}>
                Historias Médicas
              </Text>
            </Button>
          </Link>
          <Link className={classes.link}>
            <Button theme="flat" className={classes.button}>
              <GiMedicines className={classes.icon} />{" "}
              <Text theme="label" className={classes.label}>
                Inventario
              </Text>
            </Button>
          </Link>
          <Link className={classes.link}>
            <Button theme="flat" className={classes.button}>
              <FaRegCopy className={classes.icon} />{" "}
              <Text theme="label" className={classes.label}>
                Reportes
              </Text>
            </Button>
          </Link>
          <Link className={classes.link}>
            <Button theme="flat" className={classes.button}>
              <MdSettings className={classes.icon} />{" "}
              <Text theme="label" className={classes.label}>
                Configuración
              </Text>
            </Button>
          </Link>
          <Link className={classes.link}>
            <Button theme="flat" className={classes.button}>
              <FiHelpCircle className={classes.icon} />{" "}
              <Text theme="label" className={classes.label}>
                Soporte
              </Text>
            </Button>
          </Link>
        </div>
      </div>
    </Slide>
  );
};

const mapStateToProps = ({ layout: { openSidebar } }) => ({
  open: openSidebar,
});

export default connect(mapStateToProps, null)(Sidebar);
