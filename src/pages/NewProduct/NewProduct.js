import React from "react";
import Swal from "sweetalert2";
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

const NewProduct = () => {
  const classes = styles();

  const initialValues = {
    name: "",
    stock: "",
    medide: "",
    type: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        name: Yup.string().required("Este campo es requerido"),
        stock: Yup.string().required("Este campo es requerido"),
        medide: Yup.string().required("Este campo es requerido"),
        type: Yup.string().required("Este campo es requerido"),
      })}
      onSubmit={(values, { resetForm }) => {
        Swal.fire({
          title: "¡Éxito!",
          text: `Se ha creado el producto ${values.name} correctamente`,
          icon: "success",
          confirmButtonText: "Aceptar",
        }).then(() => {
          Swal.fire({
            text: `Nombre del producto: ${values.name},
            Cantidad del producto: ${values.stock},
            Tipo del producto: ${values.type},
            Unidad de medida del producto: ${values.medide}
            `,
            confirmButtonText: "Aceptar",
          });
        });

        resetForm(initialValues);
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <Container className={classes.container}>
            <Text component="h1" theme="title" className={classes.title}>
              Nuevo Producto
            </Text>
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
                name="type"
                value={values.type}
                onChange={handleChange}
                autoComplete="off"
                error={touched.type && errors.type ? true : false}
                helperText={touched.type && errors.type ? errors.type : ""}
              >
                <option value="medicamento">Medicamento</option>
                <option value="ampollas">Ampollas</option>
                <option value="quirurgico">Quirurgicos</option>
                <option value="otro">Otro</option>
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
            <div className={classes.flex}>
              <Link to="/" className={classes.link} color="secondary">
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

export default NewProduct;
