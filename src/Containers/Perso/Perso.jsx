import React from 'react'
import { Link } from 'react-router-dom';
import './Perso.css';

function Perso() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md">
          <div className="row align-items-center" id="button-place">
            <Link className="plus-create" to="/PersoCreate"></Link>
            <label className="fs-2">Creation de perssonages</label> 
          </div>
        </div>
      </div>
      <div className="backButton">
        <Link className="btn btn-outline-info backButton" to="/">Home</Link>
      </div>
    </div>
  )
}

export default Perso
