import React from 'react'
import './Home.css';

function Home() {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md">
          <div className="row align-items-center" id="button-place">
            <button className="perso-btn"/>
            <label className="fs-2">Mes personnages</label>
          </div> 
        </div>
        <div className="col-md">
          <div className="row align-items-center" id="button-place">
            <button className="profil-btn"/>
            <label className="fs-2">Mon profil</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
