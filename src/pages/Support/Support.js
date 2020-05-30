import React from "react";

// Atoms
import Container from "../../components/Atoms/Container";
import Text from "../../components/Atoms/Text";
import Button from "../../components/Atoms/Button";
import Link from "../../components/Atoms/Link";
import styles from "./styles.js";

const Support = () => {
  const classes = styles();

  return (
    <Container className={classes.container}>
      <Text component="h1" theme="title" className={classes.title}>
        Soporte
      </Text>
      <div className={classes.div}>
        <Text component="p">
          Desarrollado por <b>Juan Carlos Barrios Sánchez</b>
        </Text>
        <Text component="p">
          <b>Correo electrónico:</b> juanbarrios045@gmail.com <br />
          <b>Télefono:</b> +58412 - 1556808 <br />
          <b>Guanare - Edo. Portuguesa</b>
        </Text>
      </div>
    </Container>
  );
};

export default Support;
