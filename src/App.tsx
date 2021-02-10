import Console from "./pages/Console";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import AuthProvider from "./components/AuthContext";
import Home from "./pages/Home";
import { theme } from "./styles/theme";
import PrivateRoute from "./components/PrivateRoute";
import ErrorHandler from "./components/ErrorHandlingContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ErrorHandler>
          <AuthProvider>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute exact path="/console">
              <Console />
            </PrivateRoute>
          </AuthProvider>
        </ErrorHandler>
      </Router>
    </ThemeProvider>
  );
}

export default App;
