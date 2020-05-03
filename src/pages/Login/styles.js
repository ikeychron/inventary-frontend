import { makeStyles } from "@material-ui/core";
import imgBg from "../../assets/img/login.jpg";

export default makeStyles((Theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${imgBg})`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    [Theme.breakpoints.down("sm")]: {
      backgroundImage: "none",
      justifyContent: "center",
    },
  },
  divForm: {
    width: "500px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: "4rem",
    boxShadow: "0px 8px 12px 0 rgba(0, 0, 0, 0.2)",
    [Theme.breakpoints.down("sm")]: {
      padding: "3rem",
      width: "100%",
      boxShadow: "none",
    },
  },
  img: {
    width: "120px",
  },
  title: {
    fontSize: "40px",
    marginTop: ".6rem",
    marginBottom: 0,
  },
}));
