import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter, Switch } from "react-router-dom";
import Axios from "axios";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

// Routes
import { Route, routes } from "./routes";

// Theme
import theme from "./theme";
import GlobalResets from "./theme/globalResets";

// Actions
import {
  setUserAuthentication,
  setUserData,
} from "./store/actions/userActions";

const App = ({ setUserAuthentication, setUserData, isAuthenticated }) => {
  const [isVerifyToken, setIsVerifyToken] = useState(true);

  // Verify User Token
  useEffect(() => {
    try {
      const validateToken = async () => {
        const token = localStorage.getItem("token");
        const res = await Axios.post("/user", { token });
        const userData = await res.json();

        if (userData.id) {
          const { email } = userData;
          setUserAuthentication(true, email);
          setUserData(userData);
        } else {
          setUserAuthentication(false, "");
          setUserData({});
        }

        setIsVerifyToken(false);
      };

      validateToken();
    } catch (err) {
      console.log(err);
    }
  }, [setUserAuthentication, setUserData]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalResets />
        <Switch></Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

App.propTypes = {
  // State
  isAuthenticated: PropTypes.bool.isRequired,
  // Methods
  setUserAuthentication: PropTypes.func.isRequired,
  setUserData: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated,
});

const mapDispatchToProps = {
  setUserAuthentication,
  setUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
