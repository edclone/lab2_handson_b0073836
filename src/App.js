import React  from 'react';
import {BrowserRouter, Route, Routes,NavLink,} from 'react-router-dom';
//pages
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App(){
  return (
      <BrowserRouter>
          <header>
            <nav>
                <h1> Welcome to my Website</h1>
                <NavLink to="/">Home </NavLink>
                <NavLink to="/About">About </NavLink>
                <NavLink to="/Contact">Contact </NavLink>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </main>
      </BrowserRouter>
  );
}

export default App;
