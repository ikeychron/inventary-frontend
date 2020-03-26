import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Typography component="h1" color="primary">
        Hello World!
      </Typography>
      <Link to="/iniciar-sesion">Iniciar Sesión</Link>
    </>
  );
};

export default Home;
