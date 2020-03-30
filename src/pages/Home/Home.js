import React, { useState } from "react";

// Atoms
import Text from "../../components/Atoms/Text";
import Button from "../../components/Atoms/Button";
import Link from "../../components/Atoms/Link";
import Input from "../../components/Atoms/Input";

// Styles
import styles from "./styles.js";
import Navbar from "../../components/Molecules/Navbar/Navbar";

const Home = () => {
  const classes = styles();

  return (
    <>
      <Navbar />
      <Text>H</Text>
    </>
  );
};

export default Home;
