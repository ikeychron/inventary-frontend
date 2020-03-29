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
  img: {
    width: "120px"
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
    margin: "1.5rem 1rem",
    flexBasis: '40%',
    flex: 1
  },
  button: {
    marginTop: "20px",
    width: 250,
    textTransform: "uppercase",
    textAlign: "center"
  }
}));
