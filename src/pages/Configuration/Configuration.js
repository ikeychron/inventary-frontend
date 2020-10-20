import React from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";

// Material UI
import {
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  TableContainer,
  Paper,
} from "@material-ui/core";

// Icons
import { MdModeEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

// Atoms
import Container from "../../components/Atoms/Container";
import Text from "../../components/Atoms/Text";
import Link from "../../components/Atoms/Link";
import styles from "./styles.js";

const Configuration = ({ user }) => {
  const classes = styles();
  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar el usuario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          "Usuario Eliminado",
          "Se ha eliminado el usuario correctamente",
          "success"
        );
      }
    });
  };

  return (
    <Container>
      <Text component="h1" theme="title" className={classes.title}>
        Usuarios
      </Text>

      <div className={classes.div}>
        <Link to="/registrar-usuario" className={classes.link}>
          Nuevo Usuario
        </Link>
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Nombres y Apellidos</b>
              </TableCell>
              <TableCell>
                <b>Nombre de usuario</b>
              </TableCell>
              <TableCell>
                <b>Cédula</b>
              </TableCell>
              <TableCell>
                <b>Correo</b>
              </TableCell>
              <TableCell>
                <b>Acciones</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Barrios Sanchez Juan Carlos
              </TableCell>
              <TableCell>JuanB</TableCell>
              <TableCell>12.124.152</TableCell>
              <TableCell>correo@gmail.com</TableCell>
              <TableCell>
                <Link>
                  <MdModeEdit className={classes.icon} />
                </Link>
                <Link onClick={handleDelete}>
                  <AiOutlineDelete className={classes.icon} />
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default connect(
  ({ auth: { user } }) => ({
    user,
  }),
  null
)(Configuration);
