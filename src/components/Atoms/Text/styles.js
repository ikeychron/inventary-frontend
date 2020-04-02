import { makeStyles } from "@material-ui/core";

export default makeStyles((Theme) => ({
  default: {
    fontSize: "14px",
    color: Theme.palette.secondary.dark,
  },

  title: {
    fontWeight: "bold",
    color: Theme.palette.secondary.dark,
    fontSize: "18px",
  },

  label: {
    fontSize: "16px",
    color: Theme.palette.secondary.main,
    fontWeight: "normal",
  },
}));
