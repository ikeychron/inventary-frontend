import { makeStyles } from "@material-ui/core";
import imgBg from '../../assets/img/login.jpg'

export default makeStyles(Theme => ({
  container: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${imgBg})`,
    backgroundSize: 'cover',
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  divForm: {
    width: "500px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white',
    padding: '4rem',
    boxShadow: '0px 8px 12px 0 rgba(0, 0, 0, 0.2)'
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
    textTransform: "uppercase"
  }
}));
