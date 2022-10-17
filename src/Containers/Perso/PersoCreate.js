import React, { useState, setState } from 'react'
import './Perso.css';
import { Link, useHistory, useNavigate } from "react-router-dom";
import $ from 'jquery';

export const PersoCreate = () => {

  const navigate = useNavigate();

  const [nameCara, setNameCara] = useState();
  const [levelCara, setLevelCara] = useState();
  const [race, setRace] = useState();
  const [classe, setClasse] = useState();
  const [lore, setLore] = useState();

  const handleInputChange = (e) => {
    const {id, value} = e.target;
    if(id === "nameCara"){
      setNameCara(value);
    }
    if(id === "levelCara"){
      setLevelCara(value);
    }
    if(id === "race"){
      setRace(value);
    }
    if(id === "classe"){
      setClasse(value);
    }
    if(id === "lore"){
      setLore(value);
    }
  }
  
  const handleSubmit  = () => {

  
    var settings = {
      "url": "http://192.168.1.20:3001/PostPerso",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "data": {
        "nameCara": nameCara,
        "levelCara": levelCara,
        "race": race,
        "classe": classe,
        "lore": lore,
      }
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });



}

  return (
    <div className="container">
      <div className="row p-top">
        <div className="col-md">
          <form>
            <div className="form-group">
                <label>Nom de votre personnage</label>
                <input className="form-control" id="nameCara" value={nameCara} onChange = {(e) => handleInputChange(e)} placeholder="Nom"/>
            </div>
            <div className="form-group">
                <label>Niveau de départ</label>
                <input className="form-control" id="levelCara" value={levelCara} onChange = {(e) => handleInputChange(e)} placeholder="Level"/>
            </div>
            <div className="form-group">
                <label>Selection de Race</label>
                <select className="form-control" id="race" defaultValue={race} onChange = {(e) => handleInputChange(e)}>
                <option defaultValue="" selected disabled hidden>Choix de la race</option>
                <option>Humain</option>
                <option>Orc</option>
                <option>Halflin</option>
                <option>Draconnide</option>
                <option>Autre</option>
                </select>
            </div>
            <div className="form-group">
                <label>Selection de classe</label>
                <select className="form-control" id="classe" defaultValue={classe} onChange = {(e) => handleInputChange(e)}>
                <option defaultValue="" selected disabled hidden>Choix de la classe</option>
                <option>Guerrier</option>
                <option>Mage</option>
                <option>Barde</option>
                <option>Archer</option>
                <option>Demoniste</option>
                </select>
            </div>
            <div className="form-group">
                <label>Le lore de ton personnage</label>
                <textarea  className="form-control" id="lore" value={lore} onChange = {(e) => handleInputChange(e)} placeholder="Ton Lore"/>
            </div>
            <div className='p-top' >
              <button className='btn btn-outline-success ButtonSb' onClick={()=>handleSubmit()}>Submit</button>
            </div>
          </form>
          <div className='backButtonEnd'>
            <Link className="btn btn-outline-info backButton" to="/perso">Back</Link>
          </div>
        </div>
      </div>
    </div>
  )
};
