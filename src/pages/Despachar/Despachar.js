import React from "react";
import Swal from "sweetalert2";
import { Formik } from "formik";
import * as Yup from "yup";

// Material UI
import {
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  TableContainer,
  Paper,
  Checkbox,
} from "@material-ui/core";

// Atoms
import Container from "../../components/Atoms/Container";
import Text from "../../components/Atoms/Text";
import Button from "../../components/Atoms/Button";
import Link from "../../components/Atoms/Link";
import Input from "../../components/Atoms/Input";
import GridFluid from "../../components/Atoms/GridFluid";
import Select from "../../components/Atoms/Select";

// Axios
import Axios from "axios";

// Styles
import styles from "./styles.js";

const Despachar = () => {
  const classes = styles();

  const initialValues = {
    name: "",
    last_name: "",
    dni: "",
    phone: "",
    sex: "",
    edad: "",
    description: "",
    dataProducts: [],
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        name: Yup.string().required("Este campo es requerido"),
        last_name: Yup.string().required("Este campo es requerido"),
        dni: Yup.string().required("Este campo es requerido"),
        phone: Yup.string().required("Este campo es requerido"),
        sex: Yup.string().required("Este campo es requerido"),
        edad: Yup.string().required("Este campo es requerido"),
        description: Yup.string().required("Este campo es requerido"),
      })}
      onSubmit={(values, { resetForm }) => {
        Swal.fire({
          title: "¡Éxito!",
          text: `Se ha despachado correctamente`,
          icon: "success",
          confirmButtonText: "Aceptar",
        }).then(() => {
          Swal.fire({
            text: `Nombre del paciente: ${values.name},
            Cantidad del producto: ${values.stock},
            Tipo del producto: ${values.type},
            Unidad de medida del producto: ${values.medide}, 
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
              Despachar Producto
            </Text>
            <GridFluid
              columns="50% 50%"
              spacing="2.5rem 2rem"
              className={classes.gridFluid}
            >
              <Input
                type="text"
                className={classes.input}
                placeholder="Nombres del paciente"
                inputProps={{ maxLength: 30 }}
                name="name"
                value={values.name || ""}
                onChange={handleChange}
                autoComplete="off"
                error={touched.name && errors.name ? true : false}
                helperText={touched.name && errors.name ? errors.name : ""}
              />
              <Input
                type="text"
                className={classes.input}
                placeholder="Apellidos del paciente"
                inputProps={{ maxLength: 30 }}
                name="last_name"
                value={values.last_name}
                onChange={handleChange}
                autoComplete="off"
                error={touched.last_name && errors.last_name ? true : false}
                helperText={
                  touched.last_name && errors.last_name ? errors.last_name : ""
                }
              />
              <Input
                type="text"
                className={classes.input}
                placeholder="Cédula del paciente"
                inputProps={{ maxLength: 30 }}
                name="dni"
                value={values.dni}
                onChange={handleChange}
                autoComplete="off"
                error={touched.dni && errors.dni ? true : false}
                helperText={touched.dni && errors.dni ? errors.dni : ""}
              />
              <Input
                type="text"
                className={classes.input}
                placeholder="Número telefónico del paciente"
                inputProps={{ maxLength: 15 }}
                name="phone"
                value={values.phone}
                onChange={handleChange}
                autoComplete="off"
                error={touched.phone && errors.phone ? true : false}
                helperText={touched.phone && errors.phone ? errors.phone : ""}
              />
              <Select
                className={classes.input}
                placeholder="Sexo del paciente"
                name="sex"
                value={values.sex}
                onChange={handleChange}
                autoComplete="off"
                error={touched.sex && errors.sex ? true : false}
                helperText={touched.sex && errors.sex ? errors.sex : ""}
              >
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otro">Otro</option>
              </Select>

              <Input
                type="number"
                className={classes.input}
                placeholder="Edad del paciente"
                inputProps={{ maxLength: 30 }}
                name="age"
                value={values.age || ""}
                onChange={handleChange}
                autoComplete="off"
                error={touched.age && errors.age ? true : false}
                helperText={touched.age && errors.age ? errors.age : ""}
              />

              <Input
                type="text"
                className={classes.input}
                placeholder="Descripción"
                inputProps={{ maxLength: 30 }}
                name="description"
                value={values.description || ""}
                onChange={handleChange}
                autoComplete="off"
                error={touched.description && errors.description ? true : false}
                helperText={
                  touched.description && errors.description
                    ? errors.description
                    : ""
                }
              />
            </GridFluid>
            <TableContainer component={Paper} style={{ marginTop: 20 }}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>Elegir</b>
                    </TableCell>
                    <TableCell>
                      <b>Nombre</b>
                    </TableCell>
                    <TableCell>
                      <b>Stock</b>
                    </TableCell>
                    <TableCell>
                      <b>Unidad de medida</b>
                    </TableCell>
                    <TableCell>
                      <b>Cantidad</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Checkbox />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      Omeprazol
                    </TableCell>
                    <TableCell>60</TableCell>
                    <TableCell>100mg</TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        className={classes.input}
                        placeholder="Cantidad"
                        inputProps={{ maxLength: 3 }}
                        name="count1"
                        value={values.count1 || ""}
                        onChange={handleChange}
                        autoComplete="off"
                        error={touched.count1 && errors.count1 ? true : false}
                        helperText={
                          touched.count1 && errors.count1 ? errors.count1 : ""
                        }
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Checkbox />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      Vitamina C Tabletas
                    </TableCell>
                    <TableCell>65</TableCell>
                    <TableCell>100mg</TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        className={classes.input}
                        placeholder="Cantidad"
                        inputProps={{ maxLength: 3 }}
                        name="count2"
                        value={values.count2 || ""}
                        onChange={handleChange}
                        autoComplete="off"
                        error={touched.count2 && errors.count2 ? true : false}
                        helperText={
                          touched.count2 && errors.count2 ? errors.count2 : ""
                        }
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Checkbox />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      Acetominofen
                    </TableCell>
                    <TableCell>20</TableCell>
                    <TableCell>50mg</TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        className={classes.input}
                        placeholder="Cantidad"
                        inputProps={{ maxLength: 3 }}
                        name="count3"
                        value={values.count3 || ""}
                        onChange={handleChange}
                        autoComplete="off"
                        error={touched.count3 && errors.count3 ? true : false}
                        helperText={
                          touched.count3 && errors.count3 ? errors.count3 : ""
                        }
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Checkbox />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      Aspirine
                    </TableCell>
                    <TableCell>80</TableCell>
                    <TableCell>100mg</TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        className={classes.input}
                        placeholder="Cantidad"
                        inputProps={{ maxLength: 3 }}
                        name="count4"
                        value={values.count4 || ""}
                        onChange={handleChange}
                        autoComplete="off"
                        error={touched.count4 && errors.count4 ? true : false}
                        helperText={
                          touched.count4 && errors.count4 ? errors.count4 : ""
                        }
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Checkbox />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      Agua estirilizada para ampollas
                    </TableCell>
                    <TableCell>30</TableCell>
                    <TableCell>10ml</TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        className={classes.input}
                        placeholder="Cantidad"
                        inputProps={{ maxLength: 3 }}
                        name="count5"
                        value={values.count5 || ""}
                        onChange={handleChange}
                        autoComplete="off"
                        error={touched.count5 && errors.count5 ? true : false}
                        helperText={
                          touched.count5 && errors.count5 ? errors.count5 : ""
                        }
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <div className={classes.flex}>
              <Link to="/inventario" className={classes.link} color="secondary">
                Cancelar
              </Link>
              <Button color="primary" className={classes.button} type="submit">
                Despachar
              </Button>
            </div>
          </Container>
        </form>
      )}
    </Formik>
  );
};

export default Despachar;
