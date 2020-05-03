import { makeStyles } from "@material-ui/core";

export default makeStyles((Theme) => ({
  flex: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  flexCenter: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  link: {
    marginRight: "10px",
    color: Theme.palette.primary.main,
  },
  inputEmail: {
    margin: "2rem 0",
  },
  inputPass: {
    marginBottom: "1rem",
  },
  icon: {
    width: "25px",
    height: "25px",
    color: Theme.palette.primary.main,
    marginBottom: "5px",
  },
  button: {
    marginTop: "20px",
    width: 250,
    textTransform: "uppercase",
  },
}));
