import React, { useEffect, useState } from "react";
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

// Organisms
import NewProduct from "../../components/Organisms/NewProduct";
import UpdateProduct from "../../components/Organisms/UpdateProduct";

// Styles
import styles from "./styles.js";

const Inventary = () => {
  const classes = styles();

  return (
    <Container>
      <Text component="h1" theme="title" className={classes.title}>
        Inventario
      </Text>

      <div className={classes.div}>
        <Link className={classes.link}>Nuevo Producto</Link>
      </div>

      <TableContainer component={Paper} style={{ marginBottom: 20 }}>
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
                Pastilla
              </TableCell>
              <TableCell>
                25
                <Text component="p" style={{ color: "red" }}>
                  Se está agotando este producto
                </Text>
              </TableCell>
              <TableCell>10 mg</TableCell>
              <TableCell>
                <Link>
                  <MdModeEdit className={classes.icon} />
                </Link>
                <Link>
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
