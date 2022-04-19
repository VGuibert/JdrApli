import React, { useState} from 'react'
import './Login.css';
import PropTypes from 'prop-types';

async function loginUser(credentials){
    return fetch('http://localhost:8080/token', {
        method : 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data =>data.json())
}



export default function Login({setToken}) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }

    return (
    <div className="grid">
        <div className="container g-col-4 Login-container">
            <form className="g-col-4" onSubmit={handleSubmit}>
                <div>
                    <h3>Connection</h3>
                </div>

                <div className="justify-content-center text-center">
                    <label className="form-label">Pseudo</label>
                    <input type="email" className="form-control mb-20" onChange={e => setUserName(e.target.value)}/>
                </div>

                <div className="justify-content-center text-center mb-20">
                    <label className="form-label">Mot De Passe</label>
                    <input type="password" className="form-control mb-20" onChange={e => setPassword(e.target.value)}/>
                </div>

                <div className="col-12 mb-20 text-center">
                    <button type="submit" className="btn btn-dark btn-lg btn-block">Entrer</button>
                    <button type="submit" className="btn btn-lg btn-block">Mot de passe oublié</button>
                </div>
            </form>
        </div>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
