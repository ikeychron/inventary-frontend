import { makeStyles } from "@material-ui/core";

export default makeStyles((Theme) => ({
  default: {
    color: Theme.palette.text.white,
    fontSize: "14px",
    fontWeight: "bold",
    padding: ".8rem",
    textDecoration: "none",
  },
  flat: {
    color: Theme.palette.text.white,
    fontSize: "14px",
    textDecoration: "none",
    background: "none",
  },
}));
