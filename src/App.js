import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

// Theme
import theme from "./theme";

// Pages
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route exact path="/" component={SignUp} />
            <Route exact path="/iniciar-sesion" component={Login} />
            <Redirect to="/" />
          </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
