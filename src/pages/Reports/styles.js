import { makeStyles } from "@material-ui/core";
import imgBg from "../../assets/svg/files.svg";

export default makeStyles((Theme) => ({
  container: {
    flexGrow: 1,
    height: "-webkit-fill-available",
    backgroundImage: `url(${imgBg})`,
    backgroundSize: "650px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right",
    margin: 0,

    [Theme.breakpoints.down("md")]: {
      backgroundSize: "700px",
    },
  },
  title: {
    fontSize: "40px",
    marginTop: ".6rem",
    marginBottom: "2rem",
    textAlign: "center",
  },
  div: {
    marginLeft: 50,
  },
}));
