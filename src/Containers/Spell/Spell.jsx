import React from 'react'
import './Spell.css';
import request from 'superagent';
import { Link, useHistory, useNavigate } from "react-router-dom";

function Spell() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="NewSpell">
          <Link className="btn-outline-info" to="/SpellAdd">Add</Link>
        </div>
        <button className='btn btn-outline-info' onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  )
}


export default Spell
