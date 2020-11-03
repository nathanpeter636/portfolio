import { GlobalStyle } from "./Styles/GlobalStyle";

import { BrowserRouter as Router } from "react-router-dom";

import Home from "./pages";
function App() {
  return (
    <>
      <GlobalStyle />

      <Router>
        <Home />
      </Router>
    </>
  );
}
export default App;
