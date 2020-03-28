import { makeStyles } from "@material-ui/core";

export default makeStyles(Theme => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    padding: "4rem",
  },
  flex: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end"
  },
  img: {
    width: "120px"
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "50%"
  },
  title: {
    fontSize: "40px",
    marginTop: ".6rem",
    marginBottom: 0
  },
  link: {
    marginRight: "10px"
  },
  input: {
    marginTop: "1rem"
  },
  button: {
    marginTop: "20px",
    width: 250,
    textTransform: "uppercase",
    textAlign: "center"
  }
}));
