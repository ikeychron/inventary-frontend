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
    marginBottom: 0,
    textAlign: "center",
  },
  link: {
    marginRight: "10px",
    //color: Theme.palette.primary.main,
  },
  input: {
    margin: "1.5rem 1rem",
    [Theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  flex: {
    display: "flex",
    alignItems: "center",
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
}));
