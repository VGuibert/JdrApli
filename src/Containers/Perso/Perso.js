import react from 'react';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Perso.css';

export const Perso = () => {



      const [PersoName, setPerso] = useState([])

      useEffect(() => {
        fetch('http://192.168.1.20:3001/GetPerso')
          .then((response) => response.json())
          .then((responseData) => {
            setPerso(responseData.data)
          })
      }, [])  


      console.log(PersoName);
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
        <div className=''>
          <div className='row p-top'>
            {PersoName.map((items, i) => <div className='col newcolumn'><Link className ='btn btn-outline-dark newpersodiv' key={i} to={`/FichePerso/${items.Name}`}>{items.Name}</Link></div>)}
          </div>
        </div>
        <div className="backButton">
          <Link className="btn btn-outline-info backButton" to="/">Home</Link>
        </div>
      </div>
      );
};
