import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
// import Page from "./components/Page";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  const [pages] = useState([
    {
      name: 'about',
    },
    { name: 'portfolio' },
    { name: 'contact' },
    { name: 'resume' },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <Router>
      <div>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        >
        </Nav>
        <Header>
        </Header>
        <main id="main">
        <Switch>
          <Route exact path="/about" component={About}/>
          <Route exact path="/resume" component={Resume}/>
          <Route exact path="/testimonials" component={Testimonials}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>
          </Switch>
        </main>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
