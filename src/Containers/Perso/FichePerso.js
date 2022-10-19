import { param } from 'jquery';
import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import './Perso.css';

function DeleteCara (e, Params){

  e.preventDefault();

  var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  
  fetch("http://192.168.1.20:3001/DeletePerso?Name=" + Params , requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}

export const FichePerso = () => {

    const {Name} = useParams();
    const Params = {Name};

    const [PersoName, setPerso] = useState([])

      useEffect(() => {
        fetch('http://192.168.1.20:3001/GetUniquePerso?Name=' + Params.Name)
          .then((response) => response.json())
          .then((responseData) => {
            setPerso(responseData.data[0])
            console.log(PersoName)
          })
      }, []) 
 
  return (
    <div className="container">
      <div className='row infoPerso'>
        <div className='col border border-dark borderPerso'>
          {PersoName.Name}
        </div>
        <div className='col border border-dark'>
            <div className='row'>
                <div className='col'>
                  {PersoName.Level}
                </div>
                <div className='col'>
                  {PersoName.Classe}
                </div>
                <div className='col'>
                  {PersoName.Race}
                </div>
            </div>
        </div>
      </div>
      <div>
        <div className='PersoLore'>
          {PersoName.Lore}
        </div>
      </div>
      <div className="row">
        <div>
          <button className="btn btn-danger" onClick={(e) => DeleteCara(e, PersoName.Name)}>Delete</button>
        </div>
        <div className="backButton">
            <Link className="btn btn-outline-info backButton" to="/perso">Back</Link>
        </div>
       </div>
    </div>
  )
};


