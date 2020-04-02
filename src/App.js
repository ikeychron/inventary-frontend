import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

// Theme
import theme from "./theme";
import GlobalResets from "./theme/globalResets";

// Pages
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalResets />
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/iniciar-sesion" component={Login} /> */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/registrar-usuario" component={SignUp} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
