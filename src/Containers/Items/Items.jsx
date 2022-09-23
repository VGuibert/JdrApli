import React from 'react'
import './items.css';
import { Link, useHistory, useNavigate } from "react-router-dom";

function Items() {
  const navigate = useNavigate();
  return (
    <div className="container scale">
      <div>Items pages</div>
      <div>
        <button className='btn btn-outline-info' onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
    
  )
}

export default Items
