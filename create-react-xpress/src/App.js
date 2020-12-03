import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NavBar from "./components/NavBar";

import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container"
import Jumbotron from "./components/Jumbotron"

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Wrapper>
        <Container>
        <Jumbotron>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          </Jumbotron>
       </Container>
        </Wrapper>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
