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

// Axios
import Axios from "axios";

// Styles
import styles from "./styles.js";

const Inventary = () => {
  const classes = styles();
  const [productsState, setProductsState] = useState([]);
  const [productId, setProductId] = useState("");
  const [openModalEditP, setOpenModalEditP] = useState(false);
  const [openModalNewP, setOpenModalNewP] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    Axios("http://localhost:4000/products")
      .then(({ data }) => {
        const { success, products } = data;

        if (success) {
          setProductsState(products);
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
  };

  const handleEdit = (id) => {
    setProductId(id);
    setOpenModalEditP(true);
  };

  const handleDelete = (id) => {
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
        Axios.delete("http://localhost:4000/product", { data: { id } })
          .then(({ data }) => {
            const { success, message } = data;

            if (success) {
              Swal.fire({
                title: "¡Producto eliminado!",
                text: message,
                icon: "success",
                confirmButtonText: "Aceptar",
              });
              getProducts();
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
      }
    });
  };

  return (
    <>
      <NewProduct
        open={openModalNewP}
        handleClose={() => setOpenModalNewP(false)}
        getProducts={getProducts}
      />
      <UpdateProduct
        open={openModalEditP}
        handleClose={() => setOpenModalEditP(false)}
        productId={productId}
        getProducts={getProducts}
      />
      <Container>
        <Text component="h1" theme="title" className={classes.title}>
          Inventario
        </Text>

        <div className={classes.div}>
          <Link onClick={() => setOpenModalNewP(true)} className={classes.link}>
            Nuevo Producto
          </Link>{" "}
          <br /> <br />
          <Link to="/despachar-producto" className={classes.link}>
            Despachar Productos
          </Link>
        </div>

        {productsState.length > 0 ? (
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
                {productsState.map((product) => (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {product.name}
                    </TableCell>
                    <TableCell>
                      {product.stock}{" "}
                      {product.stock < 25 && (
                        <Text component="p" style={{ color: "red" }}>
                          Se está agotando este producto
                        </Text>
                      )}
                    </TableCell>
                    <TableCell>{product.medide}</TableCell>
                    <TableCell>
                      <Link onClick={() => handleEdit(product.id)}>
                        <MdModeEdit className={classes.icon} />
                      </Link>
                      <Link onClick={() => handleDelete(product.id)}>
                        <AiOutlineDelete className={classes.icon} />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Text component="p">No hay productos.</Text>
        )}
      </Container>
    </>
  );
};

export default Inventary;
