
import NavBar from "./Navbar"

import {GlobalStyle} from "./Styles/GlobalStyle";

import { BrowserRouter as Router} from 'react-router-dom';
import SideBar from "./SideBar";

function App() {
  return (

    <>
    <GlobalStyle/>

    <Router>

      <SideBar/>
    <NavBar/>
    </Router>
    </>
  )
}
export default App;
