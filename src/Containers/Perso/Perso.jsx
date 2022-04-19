import React from 'react'
import './Perso.css';

function Perso() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md">
          <div className="row align-items-center" id="button-place">
            <button className="plus-create"/>
            <label className="fs-2">Creation de perssonages</label> 
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <div className="row align-items-center" id="button-place">
            <button className="perso-btn"/>
            <label className="fs-2">Perso 1</label>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Perso
