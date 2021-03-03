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
        <Switch>
          <main id="main">
          <Route exact path="/about" component={About} />
            <About></About>
            <Resume></Resume>
            <Testimonials></Testimonials>
            <Portfolio></Portfolio>
            <Contact></Contact>
          </main>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>

  );
}

export default App;
