import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

// Pages
import Login from "./pages/Login";

import Home from "./pages/Home";

import Configuration from "./pages/Configuration";
import SignUp from "./pages/SignUp";

import Inventary from "./pages/Inventary";
import Despachar from "./pages/Despachar";

import Reports from "./pages/Reports";

import HistoryMedical from "./pages/HistoryMedical";

import Support from "./pages/Support";

// Theme
import theme from "./theme";
import GlobalResets from "./theme/globalResets";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalResets />
        <Switch>
          <Route exact path="/home" component={Home} />

          <Route exact path="/configuracion" component={Configuration} />
          <Route exact path="/registrar-usuario" component={SignUp} />

          <Route exact path="/inventario" component={Inventary} />
          <Route exact path="/despachar-producto" component={Despachar} />

          <Route exact path="/historias-medicas" component={HistoryMedical} />

          <Route exact path="/reportes" component={Reports} />

          <Route exact path="/soporte" component={Support} />

          <Route exact path="/" component={Login} />
          <Redirect to="/" />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
