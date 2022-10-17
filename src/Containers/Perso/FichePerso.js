import { param } from 'jquery';
import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import './Perso.css';

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
        <div className='row'>
            <div className='PersoF'>
                <div className='PersoName'>
                    {PersoName.Name}
                </div>
                <div className='PersoLevel'>
                    {PersoName.Level}
                </div>
                <div className='PersoRace'>
                    {PersoName.Race}
                </div>
                <div className='PersoClasse'>
                    {PersoName.Classe}
                </div>
                <div className='PersoLore'>
                    {PersoName.Lore}
                </div>
            </div>
        </div>
      <div className="row">
        <div className="backButton">
            <Link className="btn btn-outline-info backButton" to="/perso">Back</Link>
        </div>
       </div>
    </div>
  )
};
