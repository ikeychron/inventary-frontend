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
import { FaEye } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

// Atoms
import Container from "../../components/Atoms/Container";
import Text from "../../components/Atoms/Text";
import Link from "../../components/Atoms/Link";
import styles from "./styles.js";

const HistoryMedical = () => {
  const classes = styles();

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar la historia médica?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value)
        Swal.fire(
          "Historia médica eliminada",
          "Se ha eliminado la historia médica correctamente",
          "success"
        );
    });
  };

  return (
    <Container>
      <Text component="h1" theme="title" className={classes.title}>
        Historias Médicas
      </Text>

      <div className={classes.div}>
        <Link className={classes.link}>Nuevo paciente</Link>
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Paciente</b>
              </TableCell>
              <TableCell>
                <b>Cédula</b>
              </TableCell>
              <TableCell align="center">
                <b>Ver archivos</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Juan Barrios
              </TableCell>
              <TableCell>27.944.799</TableCell>
              <TableCell align="center">
                <Link>
                  <FaEye className={classes.icon} />
                </Link>
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
                Carlos Barrios
              </TableCell>
              <TableCell>27.944.800</TableCell>
              <TableCell align="center">
                <Link>
                  <FaEye className={classes.icon} />
                </Link>
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
                Juan Sanchez
              </TableCell>
              <TableCell>27.944.799</TableCell>
              <TableCell align="center">
                <Link>
                  <FaEye className={classes.icon} />
                </Link>
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
                Carlos Barrios
              </TableCell>
              <TableCell>27.944.799</TableCell>
              <TableCell align="center">
                <Link>
                  <FaEye className={classes.icon} />
                </Link>
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
                Juan Barrios
              </TableCell>
              <TableCell>27.944.799</TableCell>
              <TableCell align="center">
                <Link>
                  <FaEye className={classes.icon} />
                </Link>
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

export default HistoryMedical;
