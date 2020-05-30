import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import { Formik } from "formik";
import * as Yup from "yup";

// JWT
import jwt from "jsonwebtoken";

// Material UI
import { InputAdornment } from "@material-ui/core";

// Icons
import { FaUserAlt, FaLock } from "react-icons/fa";

// Atoms
import Button from "../../Atoms/Button";
import Link from "../../Atoms/Link";
import Input from "../../Atoms/Input";

// Actions
import {
  setUserAuthentication,
  setUserData,
} from "../../../store/actions/userActions";

// Styles
import styles from "./styles.js";
import Axios from "axios";

const LoginForm = ({ history, setUserAuthentication, setUserData }) => {
  const classes = styles();

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        email: Yup.string().required("Este campo es requerido"),
        password: Yup.string().required("Este campo es requerido"),
      })}
      onSubmit={(values, { resetForm }) => {
        Axios.post("http://localhost:4000/login", values)
          .then(({ data }) => {
            const { success, token } = data;

            if (success) {
              localStorage.setItem("token", token);
              const userData = jwt.verify(token, "KEY_SECRET");

              setUserAuthentication(true, token);
              console.log(userData);
              setUserData(userData);

              history.push("/");
            } else {
              Swal.fire({
                title: "¡Error!",
                text: "Oops, algo salió mal",
                icon: "error",
                confirmButtonText: "Aceptar",
              });
            }
          })
          .catch(({ response }) => {
            if (response.data.error) {
              const error = response.data.error;

              Swal.fire({
                title: "¡Error!",
                text: typeof error.msg === "object" ? error[0].msg : error.msg,
                icon: "error",
                confirmButtonText: "Aceptar",
              });
            }
          });

        resetForm(initialValues);
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            className={classes.inputEmail}
            placeholder="Correo"
            inputProps={{ maxLength: 30 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaUserAlt className={classes.icon} />
                </InputAdornment>
              ),
            }}
            name="email"
            value={values.email}
            onChange={handleChange}
            autoComplete="off"
            error={touched.email && errors.email ? true : false}
            helperText={touched.email && errors.email ? errors.email : ""}
            fullWidth
          />
          <Input
            type="password"
            className={classes.inputPass}
            placeholder="Contraseña"
            inputProps={{ maxLength: 30 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaLock className={classes.icon} />
                </InputAdornment>
              ),
            }}
            name="password"
            value={values.password}
            onChange={handleChange}
            autoComplete="off"
            error={touched.password && errors.password ? true : false}
            helperText={
              touched.password && errors.password ? errors.password : ""
            }
            fullWidth
          />

          <div className={classes.flex}>
            <Link to="/olvidaste-tu-clave" className={classes.link}>
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <div className={classes.flexCenter}>
            <Link to="/home" className={classes.link}>
              <Button
                color="primary"
                className={classes.button}
                onClick={handleSubmit}
              >
                Iniciar Sesión
              </Button>
            </Link>
          </div>
        </form>
      )}
    </Formik>
  );
};

const mapDispatchToProps = {
  setUserAuthentication,
  setUserData,
};

export default connect(null, mapDispatchToProps)(withRouter(LoginForm));
