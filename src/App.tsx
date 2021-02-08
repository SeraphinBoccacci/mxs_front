import Console from "./pages/Console";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import AuthProvider from "./components/AuthContext";
import Home from "./pages/Home";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/console">
            <Console />
          </Route>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
