import { makeStyles } from "@material-ui/core";

export default makeStyles((Theme) => ({
  title: {
    fontSize: "40px",
    marginTop: ".6rem",
    marginBottom: "2rem",
    textAlign: "center",
  },

  div: {
    marginBottom: 20,
  },
  link: { fontSize: 16, fontWeight: "500" },
  icon: {
    fontSize: 20,
    color: Theme.palette.primary.dark,
    margin: "auto 5px",
  },
}));
