import { GlobalStyle } from "./Styles/GlobalStyle";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";



import Home from "./pages";

import ContactPage from "./pages/contact"

function App() {
  return (
    <>
      <GlobalStyle />

      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/contact" component={ContactPage} exact/>
        </Switch>
      </Router>
     
    </>
  );
}
export default App;
