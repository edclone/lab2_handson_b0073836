import React, {useState,useCallback}  from 'react';
import {BrowserRouter, Route, Routes,NavLink,} from 'react-router-dom';
//pages
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App(){
    const [visitCount, setVisitCount] = useState(0);

    const incVisitCount = useCallback(() => {
        setVisitCount((prevCount) => prevCount + 1);
    }, []);
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
              <Route path="/"
                     element=<Home incVisitCount={incVisitCount} visitCount={visitCount} /> />
              <Route path="/About"
                     element={<About visitCount={visitCount} />} />
              <Route path="/Contact"
                     element={<Contact visitCount={visitCount} />} />
            </Routes>
          </main>
      </BrowserRouter>
  );
}

export default App;
