import React from "react";

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
    <div className={classes.container}>
      <div className={classes.divForm}>
        <img src={imgProfile} className={classes.img} alt="Perfil" />
        <Text component="h1" theme="title" className={classes.title}>
          Bienvenido
        </Text>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
