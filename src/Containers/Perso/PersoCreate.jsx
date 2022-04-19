import React from 'react'
import './Perso.css';

function PersoCreate() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md">
          <form action="http://localhost:3001/PostPerso" method="POST">
            <div className="form-group">
                <label>Nom de votre personnage</label>
                <input className="form-control" name="name" placeholder="Nom"/>
            </div>
            <div className="form-group">
                <label>Niveau de départ</label>
                <input className="form-control" name="level" placeholder="Level"/>
            </div>
            <div className="form-group">
                <label>Selection de Race</label>
                <select className="form-control" name="race">
                <option>Humain</option>
                <option>Orc</option>
                <option>Halflin</option>
                <option>Draconnide</option>
                <option>Autre</option>
                </select>
            </div>
            <div className="form-group">
                <label>Selection de classe</label>
                <select className="form-control" name="classe">
                <option>Guerrier</option>
                <option>Mage</option>
                <option>Barde</option>
                <option>Archer</option>
                <option>Demoniste</option>
                </select>
            </div>
            <div className="form-group">
                <label>Le lore de ton personnage</label>
                <textarea  className="form-control" name="lore" placeholder="Ton Lore"/>
            </div>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PersoCreate
