import React from 'react'
import './Home.css';
import { Link } from "react-router-dom";

function Home() {
  
  return (
    <div className="container scale">
      <div className="row">
        <div className="col-md">
          <div className="row align-items-center" id="button-place">
            <Link className="perso-btn" to="/perso"></Link>
            <label className="fs-2">Mes personnages</label>
          </div> 
        </div>
        <div className="col-md">
          <div className="row align-items-center" id="button-place">
            <Link className="spell-btn" to="/spell"></Link>
            <label className="fs-2">Sorts</label>
          </div>
        </div>
        <div className="col-md">
          <div className="row align-items-center" id="button-place">
            <Link className="item-btn" to="/Items"></Link>
            <label className="fs-2">Items</label>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Home
