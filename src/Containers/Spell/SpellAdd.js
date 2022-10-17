import React, { useState, setState } from 'react'
import './Spell.css';
import request from 'superagent';
import { Link, useHistory, useNavigate } from "react-router-dom";
import $ from 'jquery';


export const SpellAdd = () => {

  const navigate = useNavigate();


  const [nameSpell, setNameSpell] = useState();
  const [descSpell, setDescSpell] = useState();


  const handleInputChange = (e) => {
    const {id, value} = e.target;
    if(id === "nameSpell"){
      setNameSpell(value);
    }
    if(id === "descSpell"){
      setDescSpell(value);
    }
  }
  
  const handleSubmit  = () => {

  
    var settings = {
      "url": "http://192.168.1.20:3001/PostSpell",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "data": {
        "nameSpell": nameSpell,
        "descSpell": descSpell,
      }
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });

  }

  return (
    <div className="container">
      <div className="row">
        <div className="NewSpell">
          <form>
              <div className="form-group">
                  <label>Nom du sort</label>
                  <input className="form-control" id="nameSpell" value={nameSpell} onChange = {(e) => handleInputChange(e)} placeholder="Nom du Sort"/>
              </div>
              <div className="form-group">
                  <label>Description du sort</label>
                  <textarea  className="form-control" id="descSpell" value={descSpell} onChange = {(e) => handleInputChange(e)} placeholder="Description du sort"/>
              </div>
              <div className='SubmitButton' >
                <button className='btn btn-outline-success ButtonSb' onClick={()=>handleSubmit()}>Submit</button>
              </div>
          </form>
        </div>
        <Link className='btn btn-outline-info' to='/Spell'>Back</Link>
      </div>
    </div>
  )
  
};