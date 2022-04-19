import React from 'react'
import './Spell.css';
import request from 'superagent';

function Spell() {
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
      </div>
    </div>
  )
}


export default Spell
