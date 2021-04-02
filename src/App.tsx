import { ThemeProvider } from "@material-ui/core/styles";
import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import AuthProvider from "./components/AuthContext";
import ErrorHandler from "./components/ErrorHandlingContext";
import LoadingScreen from "./components/LoadingScreen";
import PrivateRoute from "./components/PrivateRoute";
import Seo from "./components/Seo";
import StreamerHomePage from "./pages/StreamerHomePage";
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
      <Seo></Seo>
      <Router>
        <ErrorHandler>
          <AuthProvider>
            <Suspense fallback={<LoadingScreen></LoadingScreen>}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/streamer/:herotag">
                  <StreamerHomePage></StreamerHomePage>
                </Route>
                <PrivateRoute exact path="/lab">
                  <Lab />
                </PrivateRoute>
                <Route>
                  <Redirect to="/"></Redirect>
                </Route>
              </Switch>
            </Suspense>
          </AuthProvider>
        </ErrorHandler>
      </Router>
    </ThemeProvider>
  );
}

export default App;
