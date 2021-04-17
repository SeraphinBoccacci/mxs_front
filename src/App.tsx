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
import routes from "./constants/routes";
import { theme } from "./styles/theme";

const Home = lazy(() => {
  return import("./pages/Home");
});

const TippingPage = lazy(() => {
  return import("./pages/TippingPage");
});

const Twitch = lazy(() => {
  return import("./pages/Twitch");
});

const IftttSettings = lazy(() => {
  return import("./pages/IftttSettings");
});

const OverlaysSettings = lazy(() => {
  return import("./pages/OverlaysSettings");
});

const Tutorial = lazy(() => {
  return import("./pages/Tutorial");
});

const Branding = lazy(() => {
  return import("./pages/Branding");
});

const Security = lazy(() => {
  return import("./pages/Security");
});

const UserAccountSettings = lazy(() => {
  return import("./pages/UserAccountSettings");
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
                <Route exact path={routes.home}>
                  <Home />
                </Route>
                <Route exact path={routes.tippingPage}>
                  <TippingPage></TippingPage>
                </Route>

                {/* Lab Routes */}

                <PrivateRoute exact path={routes.userAccountSettings}>
                  <UserAccountSettings />
                </PrivateRoute>

                <PrivateRoute exact path={routes.userAccountSecurity}>
                  <Security />
                </PrivateRoute>

                <PrivateRoute exact path={routes.userAccountBranding}>
                  <Branding />
                </PrivateRoute>

                <PrivateRoute exact path={routes.ifttt}>
                  <IftttSettings />
                </PrivateRoute>

                <PrivateRoute exact path={routes.overlays}>
                  <OverlaysSettings />
                </PrivateRoute>

                <PrivateRoute exact path={routes.chatBotsTwitch}>
                  <Twitch />
                </PrivateRoute>

                <Route path={routes.tutorial}>
                  <Tutorial></Tutorial>
                </Route>

                {/* Default Route */}

                <Route>
                  <Redirect to={routes.home}></Redirect>
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
