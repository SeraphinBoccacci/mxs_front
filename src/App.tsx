import "./App.css";

import { CircularProgress } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AuthProvider from "./components/AuthContext";
import ErrorHandler from "./components/ErrorHandlingContext";
import PrivateRoute from "./components/PrivateRoute";
import { theme } from "./styles/theme";

const Home = lazy(() => {
  return import("./pages/Home");
});

const Lab = lazy(() => {
  return import("./pages/Lab");
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ErrorHandler>
          <AuthProvider>
            <Suspense
              fallback={
                <CircularProgress size="4rem" style={{ margin: "auto auto" }} />
              }
            >
              <Route exact path="/">
                <Home />
              </Route>
              <PrivateRoute exact path="/lab">
                <Lab />
              </PrivateRoute>
            </Suspense>
          </AuthProvider>
        </ErrorHandler>
      </Router>
    </ThemeProvider>
  );
}

export default App;
