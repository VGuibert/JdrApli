import React, {useState} from 'react'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import {Login, Navbar} from './Components';
import {Footer, Header, Home, Perso, PersoCreate, Spell} from './Containers';
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
          <Route path="/"  element={<><Header /><Home /><Footer /></>}/>
          <Route path="/Perso"  element={<><Header /><Perso /><Footer /></>}/>
          <Route path="/PersoCreate"  element={<><Header /><PersoCreate /><Footer /></>}/>
          <Route path="/Spell"  element={<><Header /><Spell /><Footer /></>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App

