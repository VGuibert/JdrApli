import React, {useState} from 'react'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import {Login, Navbar} from './Components';
import {Footer, Header, Home, Perso, PersoCreate, Spell, Items, SpellAdd} from './Containers';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [token, setToken] = useState();
  
  

  /*if (!token){
    return (<><Header /><Login setToken={setToken} /><Footer /></>)
  }
*/
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<><Header /><Home /></>}/>
          <Route path="/Perso"  element={<><Header /><Perso /></>}/>
          <Route path="/PersoCreate"  element={<><Header /><PersoCreate /></>}/>
          <Route path="/SpellAdd"  element={<><Header /><SpellAdd /></>}/>
          <Route path="/Spell"  element={<><Header /><Spell /></>}/>
          <Route path="/Items"  element={<><Header /><Items /></>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App

