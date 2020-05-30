import React from "react";

// Atoms
import Container from "../../components/Atoms/Container";
import Text from "../../components/Atoms/Text";
import styles from "./styles.js";

const Reports = () => {
  const classes = styles();

  return (
    <Container className={classes.container}>
      <Text component="h1" theme="title" className={classes.title}>
        Reportes
      </Text>
      <div className={classes.div}>
        <Text component="p">No hay reportes aún.</Text>
      </div>
    </Container>
  );
};

export default Reports;
