import { makeStyles } from "@material-ui/core";

export default makeStyles(Theme => ({
  base: {
    fontSize: "14px",
    color: Theme.palette.text.dark,
    margin: "0.8em 0"
  },

  default: {
    composes: "base"
  },

  title: {
    composes: "base",
    fontWeight: "bold",
    fontSize: "18px"
  },

  label: {
    composes: "base",
    fontSize: "16px",
    fontWeight: "normal"
  }
}));
