import React, {useState} from 'react'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import {Login, Navbar} from './Components';
import { Home } from './Containers/Home/Home';
import { Perso } from './Containers/Perso/Perso';
import { Header } from './Containers/Header/Header';
import { Spell } from './Containers/Spell/Spell';
import { SpellAdd } from './Containers/Spell/SpellAdd';
import { Items } from './Containers/Items/Items';
import { PersoCreate } from './Containers/Perso/PersoCreate';
import { FichePerso } from './Containers/Perso/FichePerso';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<><Header /><Home /></>}/>
          <Route path="/Perso"  element={<><Header /><Perso /></>}/>
          <Route path="/FichePerso/:Name"  element={<><Header /><FichePerso /></>}/>
          <Route path="/PersoCreate"  element={<><Header /><PersoCreate /></>}/>
          <Route path="/SpellAdd"  element={<><Header /><SpellAdd /></>}/>
          <Route path="/Spell"  element={<><Header /><Spell /></>}/>
          <Route path="/Items"  element={<><Header /><Items /></>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

