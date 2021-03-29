import { ThemeProvider } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import React, { lazy, Suspense, useEffect } from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AuthProvider from "./components/AuthContext";
import ErrorHandler from "./components/ErrorHandlingContext";
import LoadingScreen from "./components/LoadingScreen";
import PrivateRoute from "./components/PrivateRoute";
import Seo from "./components/Seo";
import config from "./config/config";
import { theme } from "./styles/theme";

const Home = lazy(() => {
  return import("./pages/Home");
});

const Lab = lazy(() => {
  return import("./pages/Lab");
});

function App() {
  useEffect(() => {
    if (config.googleAnalyticsStreamId) {
      const history = createBrowserHistory();
      ReactGA.initialize(config.googleAnalyticsStreamId);
      history.listen((location) => {
        ReactGA.pageview(location.pathname + location.search);
      });
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Seo></Seo>
      <Router>
        <ErrorHandler>
          <AuthProvider>
            <Suspense fallback={<LoadingScreen></LoadingScreen>}>
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
