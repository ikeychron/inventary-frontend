import React, { useState } from "react";

// Atoms
import Text from "../../components/Atoms/Text";

// Molecules
import Sidebar from "../../components/Molecules/Sidebar";
import Navbar from "../../components/Molecules/Navbar";

// Styles
import styles from "./styles.js";

const Home = () => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Home;
