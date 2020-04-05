import { makeStyles } from "@material-ui/core";

export default makeStyles((Theme) => ({
  default: {
    fontSize: "14px",
    color: Theme.palette.primary.main,
    display: "inline-block",
    verticalAlign: "middle",
    textDecoration: "none",
    textTransform: "none",
    cursor: "pointer",
  },
}));
