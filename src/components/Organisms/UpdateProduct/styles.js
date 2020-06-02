import { makeStyles } from "@material-ui/core";

export default makeStyles((Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  img: {
    width: "120px",
  },
  title: {
    fontSize: "40px",
    marginTop: ".6rem",
    marginBottom: "2rem",
    textAlign: "center",
  },
  input: {
    [Theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  flex: {
    width: "80%",
    display: "flex",
    alignItems: "center",
    [Theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  button: {
    width: 280,
    margin: "auto 2rem",
    textTransform: "uppercase",
    textAlign: "center",
    padding: "6px !important",
  },
  link: {
    textTransform: "uppercase",
    textAlign: "center",
    padding: "1rem 3rem",
  },
  gridFluid: {
    width: "80% !important",
    margin: "0 auto",
  },
}));
