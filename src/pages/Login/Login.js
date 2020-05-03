import React, { useState } from "react";
import swal from "sweetalert2";

// Material UI
import { Slide } from "@material-ui/core";

// Images
import imgProfile from "../../assets/svg/avatar.svg";

// Atoms
import Text from "../../components/Atoms/Text";
import LoginForm from "../../components/Organisms/LoginForm";

// Styles
import styles from "./styles.js";

const Login = () => {
  const classes = styles();

  return (
    <Slide direction="up" in timeout={1500}>
      <div className={classes.container}>
        <Slide direction="right" in timeout={1000}>
          <div className={classes.divForm}>
            <img src={imgProfile} className={classes.img} alt="Perfil" />
            <Text component="h1" theme="title" className={classes.title}>
              Bienvenido
            </Text>
            <LoginForm />
          </div>
        </Slide>
      </div>
    </Slide>
  );
};

export default Login;
