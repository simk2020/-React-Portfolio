import React from "react";
import Gallery from "./pages/gallery";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />

        <Switch>

          <Route exact path={["/", "/about"]}>
            <About />
          </Route>

          <Route exact path={["/portfolio"]}>

            <Portfolio />

          </Route>

          <Route exact path={["/contact"]}>

            <Contact />

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
