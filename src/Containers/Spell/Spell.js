import React, {useState, useEffect} from 'react'
import './Spell.css';
import request from 'superagent';
import { Link, useHistory, useNavigate } from "react-router-dom";

export const Spell = () => {

  const navigate = useNavigate();


  const [Spell, setSpell] = useState([])
      

      useEffect(() => {
        fetch('http://192.168.1.20:3001/GetSpell')
          .then((response) => response.json())
          .then((responseData) => {
            console.log(responseData.data)
            setSpell(responseData.data)
          })
      }, [])  


  return (
    <div className="container">
      <div className='col p-top'>
        <table className='table table-dark'> 
          <thead>
            <tr>
              <th scope='col'>Spell Name</th>
              <th scope='col'>Spell Description</th>
              <th scope='col'>Spell Damage</th>
            </tr>
          </thead>
          <tbody>
              {Spell.map((items, index) => 
                <tr>
                  <td>{items.Spell_Name}</td>
                  <td>{items.Description}</td>
                  <td>{items.Damage}</td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="NewSpell row">
          <Link className="btn btn-outline-info" to="/SpellAdd">Add</Link>
        </div>
        <div className='row'>
          <button className='btn btn-outline-info' onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    </div>
  )
};
