import "./App.css";

import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AuthProvider from "./components/AuthContext";
import ErrorHandler from "./components/ErrorHandlingContext";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Lab from "./pages/Lab";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ErrorHandler>
          <AuthProvider>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute exact path="/lab">
              <Lab />
            </PrivateRoute>
          </AuthProvider>
        </ErrorHandler>
      </Router>
    </ThemeProvider>
  );
}

export default App;
