import { makeStyles } from "@material-ui/core";

export default makeStyles(Theme => ({
  default: {
    "&:focus": {
      borderColor: Theme.palette.primary.main
    }
  }
}));
