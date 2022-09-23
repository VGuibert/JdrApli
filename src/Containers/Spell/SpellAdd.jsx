import React from 'react'
import './Spell.css';
import request from 'superagent';
import { Link, useHistory, useNavigate } from "react-router-dom";

function SpellAdd() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="NewSpell">
            <form action="http://localhost:3001/PostSpell" method="POST">
                <input type="text" name="name"/>
                <input type="text" name="desc"/>
                <input type="submit" value="Submit" className="spellform"/>
            </form>
        </div>
        <button className='btn btn-outline-info' onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  )
}


export default SpellAdd
