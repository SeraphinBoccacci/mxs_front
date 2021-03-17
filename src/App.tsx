import "./App.css";

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
            <Suspense fallback={<div>Loading...</div>}>
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
