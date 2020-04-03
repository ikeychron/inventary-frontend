import { makeStyles } from "@material-ui/core";
import imgBg from "../../assets/svg/doctor.svg";

export default makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    height: "-webkit-fill-available",
    backgroundImage: `url(${imgBg})`,
    backgroundSize: "850px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    margin: 0,

    [theme.breakpoints.down("md")]: {
      backgroundSize: "700px",
    },
  },
}));
