import React from "react";
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

const Inventary = () => {
  const classes = styles();

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
        Inventario
      </Text>

      <div className={classes.div}>
        <Link to="/nuevo-producto" className={classes.link}>
          Nuevo Producto
        </Link>{" "}
        <br /> <br />
        <Link to="/despachar-producto" className={classes.link}>
          Despachar Productos
        </Link>
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Nombre</b>
              </TableCell>
              <TableCell>
                <b>Cantidad</b>
              </TableCell>
              <TableCell>
                <b>Unidad de medida</b>
              </TableCell>
              <TableCell>
                <b>Acciones</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Omeprazol
              </TableCell>
              <TableCell>60</TableCell>
              <TableCell>100mg</TableCell>
              <TableCell>
                <Link>
                  <MdModeEdit className={classes.icon} />
                </Link>
                <Link onClick={handleDelete}>
                  <AiOutlineDelete className={classes.icon} />
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Vitamina C Tabletas
              </TableCell>
              <TableCell>65</TableCell>
              <TableCell>100mg</TableCell>
              <TableCell>
                <Link>
                  <MdModeEdit className={classes.icon} />
                </Link>
                <Link onClick={handleDelete}>
                  <AiOutlineDelete className={classes.icon} />
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Acetominofen
              </TableCell>
              <TableCell>20</TableCell>
              <TableCell>50mg</TableCell>
              <TableCell>
                <Link>
                  <MdModeEdit className={classes.icon} />
                </Link>
                <Link onClick={handleDelete}>
                  <AiOutlineDelete className={classes.icon} />
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Aspirine
              </TableCell>
              <TableCell>80</TableCell>
              <TableCell>100mg</TableCell>
              <TableCell>
                <Link>
                  <MdModeEdit className={classes.icon} />
                </Link>
                <Link onClick={handleDelete}>
                  <AiOutlineDelete className={classes.icon} />
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Agua estirilizada para ampollas
              </TableCell>
              <TableCell>30</TableCell>
              <TableCell>10ml</TableCell>
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

export default Inventary;
