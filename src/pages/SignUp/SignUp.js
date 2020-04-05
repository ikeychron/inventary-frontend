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

const SignUp = () => {
  const classes = styles();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        dni: "",
        phoneNumber: "",
        sex: "",
        role: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Este campo es requerido"),
        lastName: Yup.string().required("Este campo es requerido"),
        dni: Yup.string().required("Este campo es requerido"),
        phoneNumber: Yup.string().required("Este campo es requerido"),
        sex: Yup.string().required("Este campo es requerido"),
        role: Yup.string().required("Este campo es requerido"),
        email: Yup.string().required("Este campo es requerido"),
        password: Yup.string().required("Este campo es requerido"),
        confirmPassword: Yup.string().required("Este campo es requerido"),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
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
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                autoComplete="off"
                error={touched.firstName && errors.firstName ? true : false}
                helperText={
                  touched.firstName && errors.firstName
                    ? errors.firstName
                    : null
                }
              />
              <Input
                type="text"
                className={classes.input}
                placeholder="Apellidos"
                inputProps={{ maxLength: 30 }}
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                autoComplete="off"
                error={touched.lastName && errors.lastName ? true : false}
                helperText={
                  touched.lastName && errors.lastName ? errors.lastName : null
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
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                autoComplete="off"
                error={touched.phoneNumber && errors.phoneNumber ? true : false}
                helperText={
                  touched.phoneNumber && errors.phoneNumber
                    ? errors.phoneNumber
                    : null
                }
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
                name="role"
                value={values.role}
                onChange={handleChange}
                autoComplete="off"
                error={touched.role && errors.role ? true : false}
                helperText={touched.role && errors.role ? errors.role : null}
              >
                <option value="Usuario">Usuario</option>
                <option value="Administrador">Administrador</option>
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
