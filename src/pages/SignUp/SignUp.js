import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

// Atoms
import Container from "../../components/Atoms/Container";
import Text from "../../components/Atoms/Text";
import Button from "../../components/Atoms/Button";
import Link from "../../components/Atoms/Link";
import Input from "../../components/Atoms/Input";
import GridFluid from "../../components/Atoms/GridFluid";
import Select from "../../components/Atoms/Select";

// Styles
import styles from "./styles.js";
import Axios from "axios";

const SignUp = () => {
  const classes = styles();

  return (
    <Formik
      initialValues={{
        name: "",
        last_name: "",
        dni: "",
        phone: "",
        sex: "",
        roleId: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Este campo es requerido"),
        last_name: Yup.string().required("Este campo es requerido"),
        dni: Yup.string().required("Este campo es requerido"),
        phone: Yup.string().required("Este campo es requerido"),
        sex: Yup.string().required("Este campo es requerido"),
        roleId: Yup.string().required("Este campo es requerido"),
        email: Yup.string().required("Este campo es requerido"),
        password: Yup.string().required("Este campo es requerido"),
        confirmPassword: Yup.string().required("Este campo es requerido"),
      })}
      onSubmit={(values) => {
        Axios.post("http://localhost:4000/user", values)
          .then((msg) => console.log(msg))
          .catch((err) => console.log(err));
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <Container className={classes.container}>
            <Text component="h1" theme="title" className={classes.title}>
              Registrar Usuario
            </Text>
            <GridFluid
              columns="50% 50%"
              spacing="2.5rem 2rem"
              className={classes.gridFluid}
            >
              <Input
                type="text"
                className={classes.input}
                placeholder="Nombres"
                inputProps={{ maxLength: 30 }}
                name="name"
                value={values.name}
                onChange={handleChange}
                autoComplete="off"
                error={touched.name && errors.name ? true : false}
                helperText={touched.name && errors.name ? errors.name : null}
              />
              <Input
                type="text"
                className={classes.input}
                placeholder="Apellidos"
                inputProps={{ maxLength: 30 }}
                name="last_name"
                value={values.last_name}
                onChange={handleChange}
                autoComplete="off"
                error={touched.last_name && errors.last_name ? true : false}
                helperText={
                  touched.last_name && errors.last_name
                    ? errors.last_name
                    : null
                }
              />
              <Input
                type="text"
                className={classes.input}
                placeholder="Cédula"
                inputProps={{ maxLength: 30 }}
                name="dni"
                value={values.dni}
                onChange={handleChange}
                autoComplete="off"
                error={touched.dni && errors.dni ? true : false}
                helperText={touched.dni && errors.dni ? errors.dni : null}
              />
              <Input
                type="text"
                className={classes.input}
                placeholder="Número telefónico"
                inputProps={{ maxLength: 15 }}
                name="phone"
                value={values.phone}
                onChange={handleChange}
                autoComplete="off"
                error={touched.phone && errors.phone ? true : false}
                helperText={touched.phone && errors.phone ? errors.phone : null}
              />
              <Select
                className={classes.input}
                placeholder="Sexo"
                name="sex"
                value={values.sex}
                onChange={handleChange}
                autoComplete="off"
                error={touched.sex && errors.sex ? true : false}
                helperText={touched.sex && errors.sex ? errors.sex : null}
              >
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otro">Otro</option>
              </Select>
              <Select
                className={classes.input}
                placeholder="Rol del nuevo usuario"
                name="roleId"
                value={values.roleId}
                onChange={handleChange}
                autoComplete="off"
                error={touched.roleId && errors.roleId ? true : false}
                helperText={
                  touched.roleId && errors.roleId ? errors.roleId : null
                }
              >
                <option value="1">Usuario</option>
                <option value="2">Administrador</option>
              </Select>
              <Input
                type="email"
                className={classes.input}
                placeholder="Correo"
                inputProps={{ maxLength: 30 }}
                name="email"
                value={values.email}
                onChange={handleChange}
                autoComplete="off"
                error={touched.email && errors.email ? true : false}
                helperText={touched.email && errors.email ? errors.email : null}
              />
              <Input
                type="password"
                className={classes.input}
                placeholder="Contraseña"
                inputProps={{ maxLength: 30 }}
                name="password"
                value={values.password}
                onChange={handleChange}
                autoComplete="off"
                error={touched.password && errors.password ? true : false}
                helperText={
                  touched.password && errors.password ? errors.password : null
                }
              />
              <Input
                type="password"
                className={classes.input}
                placeholder="Confirmar contraseña"
                inputProps={{ maxLength: 30 }}
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                autoComplete="off"
                error={
                  touched.confirmPassword && errors.confirmPassword
                    ? true
                    : false
                }
                helperText={
                  touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : null
                }
              />
            </GridFluid>
            <div className={classes.flex}>
              <Link to="/home" className={classes.link} color="secondary">
                Cancelar
              </Link>
              <Button color="primary" className={classes.button} type="submit">
                Registrar
              </Button>
            </div>
          </Container>
        </form>
      )}
    </Formik>
  );
};

export default SignUp;
