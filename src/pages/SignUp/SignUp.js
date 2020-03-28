import React, { useState } from "react";
import swal from "sweetalert";

// Atoms
import Text from "../../components/Atoms/Text";
import Button from "../../components/Atoms/Button";
import Link from "../../components/Atoms/Link";
import Input from "../../components/Atoms/Input";

// Styles
import styles from "./styles.js";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = styles();

  return (
    <div className={classes.container}>
      <Text component="h1" theme="title" className={classes.title}>
        Registrar Usuario
      </Text>
      <div className={classes.grid}>
        <Input
          type="text"
          className={classes.input}
          value={password}
          onChange={e => setPassword(e)}
          placeholder="Nombres"
          inputProps={{ maxLength: 30 }}
        />
        <Input
          type="text"
          className={classes.input}
          value={password}
          onChange={e => setPassword(e)}
          placeholder="Apellidos"
          inputProps={{ maxLength: 30 }}
        />
        <Input
          type="email"
          className={classes.input}
          value={email}
          onChange={e => setEmail(e)}
          placeholder="Correo"
          inputProps={{ maxLength: 30 }}
        />
        <Input
          type="password"
          className={classes.input}
          value={password}
          onChange={e => setPassword(e)}
          placeholder="Contraseña"
          inputProps={{ maxLength: 30 }}
        />
        <Input
          type="password"
          className={classes.input}
          value={password}
          onChange={e => setPassword(e)}
          placeholder="Confirmar contraseña"
          inputProps={{ maxLength: 30 }}
        />
      </div>
      <Link to="/iniciar-sesion" className={classes.button} color="secondary">
        Cancelar
      </Link>
      <Button
        color="primary"
        className={classes.button}
        onClick={() => swal("Press")}
      >
        Registrar
      </Button>
    </div>
  );
};

export default SignUp;
