import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

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
const LoginForm = ({ history, setUserAuthentication, setUserData }) => {
  const classes = styles();

  const initialValues = {
    value: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        value: Yup.string().required("Este campo es requerido"),
        password: Yup.string().required("Este campo es requerido"),
      })}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        history.push("/home");
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            className={classes.inputEmail}
            placeholder="Correo, número telefónico, cédula o nombre de usuario"
            inputProps={{ maxLength: 30 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaUserAlt className={classes.icon} />
                </InputAdornment>
              ),
            }}
            name="value"
            value={values.value}
            onChange={handleChange}
            autoComplete="off"
            error={touched.value && errors.value ? true : false}
            helperText={touched.value && errors.value ? errors.value : ""}
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
