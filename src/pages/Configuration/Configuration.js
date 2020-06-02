import React, { useEffect, useState } from "react";
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

// Axios
import Axios from "axios";

// Atoms
import Container from "../../components/Atoms/Container";
import Text from "../../components/Atoms/Text";
import Link from "../../components/Atoms/Link";
import styles from "./styles.js";

const Configuration = ({ user }) => {
  const classes = styles();

  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/users")
      .then(({ data }) => {
        const users = data.data.find((userAPI) => userAPI.id !== user.id);

        if (users !== undefined) {
          setDataUsers(data.data);
        } else {
          setDataUsers([]);
        }
      })
      .catch(({ response }) => {
        const error = response.data.error;
        console.log(response);
      });
  }, []);

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar el producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          "Producto Eliminado",
          "Se ha eliminado el producto correctamente",
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

      {dataUsers.length > 0 ? (
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
              {dataUsers.map((user, key) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {`${user.last_name} ${user.name}`}
                  </TableCell>
                  <TableCell>{user.nameUser}</TableCell>
                  <TableCell>{user.dni}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Link>
                      <MdModeEdit className={classes.icon} />
                    </Link>
                    <Link onClick={handleDelete}>
                      <AiOutlineDelete className={classes.icon} />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Text component="p">No hay usuarios registrados.</Text>
      )}
    </Container>
  );
};

export default connect(
  ({ auth: { user } }) => ({
    user,
  }),
  null
)(Configuration);
