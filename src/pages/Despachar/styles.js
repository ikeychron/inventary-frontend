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
    marginTop: "2rem",
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
    [Theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  button: {
    marginTop: "20px",
    width: 250,
    textTransform: "uppercase",
    textAlign: "center",
  },
  link: {
    marginTop: "20px",
    width: 250,
    textTransform: "uppercase",
    textAlign: "center",
    padding: "1rem",
  },
  gridFluid: {
    width: "80% !important",
    margin: "0 auto",
  },
}));
