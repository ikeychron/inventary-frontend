import React, { useState } from "react";
import swal from "sweetalert2";

// Material UI
import { InputAdornment, Slide } from "@material-ui/core";

// Images
import imgProfile from "../../assets/svg/avatar.svg";

// Icons
import { FaUserAlt, FaLock } from "react-icons/fa";

// Atoms
import Text from "../../components/Atoms/Text";
import Button from "../../components/Atoms/Button";
import Link from "../../components/Atoms/Link";
import Input from "../../components/Atoms/Input";

// Styles
import styles from "./styles.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            <Input
              type="email"
              className={classes.inputEmail}
              value={email}
              onChange={(e) => setEmail(e)}
              placeholder="Correo"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaUserAlt className={classes.icon} />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Input
              type="password"
              className={classes.inputPass}
              value={password}
              onChange={(e) => setPassword(e)}
              placeholder="Contraseña"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaLock className={classes.icon} />
                  </InputAdornment>
                ),
              }}
              inputProps={{ maxLength: 16 }}
              fullWidth
            />
            <div className={classes.flex}>
              <Link to="/olvidaste-tu-clave" className={classes.link}>
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <Link to="/home" className={classes.link}>
              <Button
                color="primary"
                className={classes.button}
                // onClick={() => swal("Press")}
              >
                Iniciar Sesión
              </Button>
            </Link>
          </div>
        </Slide>
      </div>
    </Slide>
  );
};

export default Login;
