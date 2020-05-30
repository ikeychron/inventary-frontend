import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

// JWT
import jwt from "jsonwebtoken";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

import Inventary from "./pages/Inventary";
import NewProduct from "./pages/NewProduct";
import Despachar from "./pages/Despachar";

import Reports from "./pages/Reports";

import HistoryMedical from "./pages/HistoryMedical";

import Support from "./pages/Support";

// Theme
import theme from "./theme";
import GlobalResets from "./theme/globalResets";

// Actions
import {
  setUserAuthentication,
  setUserData,
} from "./store/actions/userActions";

const App = ({ setUserAuthentication, setUserData, isAuth, user }) => {
  const [isVerifyToken, setIsVerifyToken] = useState(true);

  // Verify User Token
  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        const userData = jwt.verify(token, "KEY_SECRET");

        if (userData.id) {
          setUserAuthentication(true, token);
          setUserData(userData);
        } else {
          setUserAuthentication(false, "");
          setUserData({});
        }
      } else {
        if (!window.location.href === "/iniciar-sesion") {
          window.location.href = "/iniciar-sesion";
        }
      }

      setIsVerifyToken(false);
    };
    validateToken();
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalResets />
        {!isVerifyToken && (
          <Switch>
            {isAuth ? (
              <>
                <Route exact path="/" component={Home} />

                {user.roleId === 2 && (
                  <Route exact path="/registrar-usuario" component={SignUp} />
                )}

                <Route exact path="/inventario" component={Inventary} />
                <Route exact path="/nuevo-producto" component={NewProduct} />
                <Route exact path="/despachar-producto" component={Despachar} />

                <Route
                  exact
                  path="/historias-medicas"
                  component={HistoryMedical}
                />

                <Route exact path="/reportes" component={Reports} />

                <Route exact path="/soporte" component={Support} />
                <Redirect to="/" />
              </>
            ) : (
              <>
                <Route exact path="/iniciar-sesion" component={Login} />
                <Redirect to="/iniciar-sesion" />
              </>
            )}
          </Switch>
        )}
      </ThemeProvider>
    </BrowserRouter>
  );
};

App.propTypes = {
  // State
  isAuth: PropTypes.bool.isRequired,
  // Methods
  setUserAuthentication: PropTypes.func.isRequired,
  setUserData: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth: { isAuthenticated, user } }) => ({
  isAuth: isAuthenticated.isAuth,
  user,
});

const mapDispatchToProps = {
  setUserAuthentication,
  setUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
