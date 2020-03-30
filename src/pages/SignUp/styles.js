import { makeStyles } from "@material-ui/core";

export default makeStyles(Theme => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    padding: "4rem"
  },
  img: {
    width: "120px"
  },
  title: {
    fontSize: "40px",
    marginTop: ".6rem",
    marginBottom: 0,
    textAlign: "center"
  },
  link: {
    marginRight: "10px"
  },
  input: {
    margin: "1.5rem 1rem",
    [Theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  /* inputPhone: {
    width: "100% !important"
  }, */
  flex: {
    display: "flex",
    alignItems: "center",
    [Theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse"
    }
  },
  button: {
    marginTop: "20px",
    width: 250,
    textTransform: "uppercase",
    textAlign: "center"
  }
}));
