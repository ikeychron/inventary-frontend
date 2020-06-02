import React, { useState } from "react";
import Swal from "sweetalert2";
import { Formik } from "formik";
import * as Yup from "yup";

// Material UI
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

// Atoms
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import Link from "../../Atoms/Link";
import Input from "../../Atoms/Input";
import GridFluid from "../../Atoms/GridFluid";
import Select from "../../Atoms/Select";

// Axios
import Axios from "axios";

// Styles
import styles from "./styles.js";

const NewProduct = ({ open, handleClose, getProducts }) => {
  const classes = styles();
  const [error, setError] = useState("");

  const initialValues = {
    name: "",
    stock: "",
    medide: "",
    categoryProductId: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        name: Yup.string().required("Este campo es requerido"),
        stock: Yup.string().required("Este campo es requerido"),
        medide: Yup.string().required("Este campo es requerido"),
        categoryProductId: Yup.string().required("Este campo es requerido"),
      })}
      onSubmit={(values, { resetForm }) => {
        Axios.post("http://localhost:4000/new-product", values)
          .then(({ data }) => {
            const { success, message } = data;

            if (success) {
              Swal.fire({
                title: "¡Producto creado!",
                text: message,
                icon: "success",
                confirmButtonText: "Aceptar",
              });
              setError("");
              getProducts();
              resetForm(initialValues);
              handleClose();
            } else {
              setError("Oops, algo salió mal");
            }
          })
          .catch(({ response }) => {
            if (response.data.error) {
              const error = response.data.error;
              setError(
                typeof error.msg === "object" ? error[0].msg : error.msg
              );
            }
          });
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <form>
          <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Nuevo Producto</DialogTitle>
            <DialogContent dividers>
              <GridFluid
                columns="50% 50%"
                spacing="2.5rem 2rem"
                className={classes.gridFluid}
              >
                <Input
                  type="text"
                  className={classes.input}
                  placeholder="Nombre del producto"
                  inputProps={{ maxLength: 30 }}
                  name="name"
                  value={values.name || ""}
                  onChange={handleChange}
                  autoComplete="off"
                  error={touched.name && errors.name ? true : false}
                  helperText={touched.name && errors.name ? errors.name : ""}
                />
                <Input
                  type="number"
                  className={classes.input}
                  placeholder="Cantidad"
                  inputProps={{ maxLength: 30 }}
                  name="stock"
                  value={values.stock}
                  onChange={handleChange}
                  autoComplete="off"
                  error={touched.stock && errors.stock ? true : false}
                  helperText={touched.stock && errors.stock ? errors.stock : ""}
                />

                <Select
                  className={classes.input}
                  placeholder="Tipo de producto"
                  name="categoryProductId"
                  value={values.categoryProductId}
                  onChange={handleChange}
                  autoComplete="off"
                  error={
                    touched.categoryProductId && errors.categoryProductId
                      ? true
                      : false
                  }
                  helperText={
                    touched.categoryProductId && errors.categoryProductId
                      ? errors.categoryProductId
                      : ""
                  }
                >
                  <option value="1">Medicamento</option>
                  <option value="2">Ampollas</option>
                  <option value="3">Materiales Quirúrgicos</option>
                  <option value="4">Otro</option>
                </Select>

                <Input
                  type="text"
                  className={classes.input}
                  placeholder="Unidad de medida"
                  inputProps={{ maxLength: 30 }}
                  name="medide"
                  value={values.medide}
                  onChange={handleChange}
                  autoComplete="off"
                  error={touched.medide && errors.medide ? true : false}
                  helperText={
                    touched.medide && errors.medide ? errors.medide : ""
                  }
                />
              </GridFluid>
            </DialogContent>
            <DialogActions>
              <div className={classes.flex}>
                <Link
                  onClick={handleClose}
                  className={classes.link}
                  color="secondary"
                >
                  Cancelar
                </Link>
                <Button
                  color="primary"
                  className={classes.button}
                  onClick={handleSubmit}
                >
                  Confirmar
                </Button>
              </div>
              {error && (
                <Text
                  component="p"
                  style={{
                    color: "red",
                    fontWeight: "500",
                    margin: "20px auto",
                  }}
                >
                  {error}
                </Text>
              )}
            </DialogActions>
          </Dialog>
        </form>
      )}
    </Formik>
  );
};

export default NewProduct;
