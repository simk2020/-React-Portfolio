import React from "react";
import Gallery from "./pages/gallery";
import portfolio from "./pages/portfolio";
import contact from "./pages/contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className ="App">
      <Navbar />

      <Router>
        <Switch>

          <Route exact path = {["/", "/about"]}>
          </Route>

          <Route exact path = {["/portfolio"]}>
          </Route>


          

        <Wrapper>
        <Gallery />
        {/* <Portfolio /> */}
        {/* <Contact /> */}
      </Wrapper>

        </Switch>
     
     
      
      
      </Router>

      <Footer />
    </div>
  );
}

export default App;
