import { makeStyles } from "@material-ui/core";

export default makeStyles(Theme => ({
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: Theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  divForm: {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Theme.palette.secondary.light,
    borderRadius: 20,
    padding: '3rem 2rem',
    boxShadow: '0px 8px 12px 0 rgba(0, 0, 0, 0.2)',

    [Theme.breakpoints.down('sm')]: {
      borderRadius: 0,
      backgroundColor: Theme.palette.secondary.light,
    }
  },
  flex: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end"
  },
  img: {
    width: "120px"
  },
  icon: {
    width: "25px",
    height: "25px",
    color: Theme.palette.primary.main,
    marginBottom: "5px"
  },
  title: {
    fontSize: "40px",
    marginTop: ".6rem",
    marginBottom: 0
  },
  link: {
    marginRight: "10px"
  },
  inputEmail: {
    margin: "2rem 0"
  },
  inputPass: {
    marginBottom: '1rem'
  },
  button: {
    marginTop: "20px",
    width: 250,
    padding: "1.4rem",
    textTransform: "uppercase"
  }
}));
