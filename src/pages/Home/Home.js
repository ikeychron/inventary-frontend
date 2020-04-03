import React from "react";

// Atoms
import Container from "../../components/Atoms/Container";

// Styles
import styles from "./styles.js";

const Home = () => {
  const classes = styles();

  return <Container className={classes.container} />;
};

export default Home;
