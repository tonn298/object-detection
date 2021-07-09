import "./App.css";

import Home from "../pages/Home";
import GlobalProvider from "../context/GlobalProvider";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Home />
      </div>
    </GlobalProvider>
  );
}

export default App;
