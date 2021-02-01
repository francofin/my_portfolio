import React, { useState } from 'react';
import Nav from "./components/Nav";
// import Page from "./components/Page";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from './components/Footer';


function App() {
  const [pages] = useState([
    {
      name: 'about',
    },
    { name: 'portfolio'},
    { name: 'contact'},
    { name: 'resume'},
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <div>
      <Nav
      pages={pages}
      setCurrentPage = {setCurrentPage}
      currentPage = {currentPage}
      >
      </Nav>
     <Header>
     </Header>
     <main id="main">
     <About></About>
     <Portfolio></Portfolio>
     </main>
     <Footer></Footer>
    </div>
  );
}

export default App;
