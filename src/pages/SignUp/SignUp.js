import React, { useState } from "react";
import swal from "sweetalert";

// Atoms
import Text from "../../components/Atoms/Text";
import Button from "../../components/Atoms/Button";
import Link from "../../components/Atoms/Link";
import Input from "../../components/Atoms/Input";
import GridFluid from "../../components/Atoms/GridFluid";
import Select from "../../components/Atoms/Select";

// input Phone
/* import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; */

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
      <GridFluid columns="40% 40%">
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
          type="text"
          className={classes.input}
          value={password}
          onChange={e => setPassword(e)}
          placeholder="Cédula"
          inputProps={{ maxLength: 30 }}
        />
        <Input
          type="text"
          className={classes.input}
          value={password}
          onChange={e => setPassword(e)}
          placeholder="Número telefónico"
          inputProps={{ maxLength: 11 }}
        />
        {/* <PhoneInput
          inputClass={classes.inputPhone}
          containerStyle={{
            margin: "1.5rem 1rem",
            width: "auto"
          }}
          inputProps={{
            name: "phone",
            required: true,
            placeholder: "Número telefónico",
            maxLength: 16
          }}
          // buttonClass={stylesFlags.btnFlags}
          country="ve"
          value={password}
          onChange={e => setPassword(e)}
        /> */}
        <Select
          className={classes.input}
          displayEmpty
          placeholder="Sexo"
          // value={'password'}
          //onChange={(e) => console.log(e)}
        >
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
          <option value="Otro">Otro</option>
        </Select>
        <Select
          className={classes.input}
          displayEmpty
          placeholder="Rol del nuevo usuario"
          // value={'password'}
          //onChange={(e) => console.log(e)}
        >
          <option value="Usuario">Usuario</option>
          <option value="Administrador">Administrador</option>
        </Select>
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
      </GridFluid>
      <div className={classes.flex}>
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
    </div>
  );
};

export default SignUp;
