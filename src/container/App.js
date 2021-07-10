import "./App.css";
import { ThemeProvider } from "styled-components";

import theme from "../theme";
import Home from "../pages/Home";
import GlobalProvider from "../context/GlobalProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <div className="App">
          <Home />
        </div>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
