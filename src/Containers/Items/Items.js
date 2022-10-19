import react from 'react';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export const Items = () => {

  function addItems (NameItem, DescItems) {

    const handleInputChange = (e) => {
      const {id, value} = e.target;
      if(id === "NameItem"){
        setNameCara(value);
      }
      if(id === "DescItems"){
        setLevelCara(value);
      }
    }
    
    const handleSubmit  = () => {
  
    
      var settings = {
        "url": "http://192.168.1.20:3001/PostItems",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "nameItem": NameItem,
          "Description": DescItems,
        }
      };
  
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
  }
}

const [Item, setItem] = useState([])
      

useEffect(() => {
  fetch('http://192.168.1.20:3001/GetItems')
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData.data)
      setItem(responseData.data)
    })
}, [])  


return (
<div className="container">
  <div className='col p-top'>
    <table className='table table-dark'> 
      <thead>
        <tr>
          <th scope='col'>Item Name</th>
          <th scope='col'>Item Description</th>
        </tr>
      </thead>
      <tbody>
          {Item.map((items, index) => 
            <tr>
              <td>{items.Name}</td>
              <td>{items.Description}</td>
            </tr>
          )}
      </tbody>
    </table>
  </div>
  <div className="row">
    <div className="NewSpell row">

    </div>
    <div className='row'>
      <button className='btn btn-outline-info' onClick={() => navigate(-1)}>Back</button>
    </div>
  </div>
</div>
)

};