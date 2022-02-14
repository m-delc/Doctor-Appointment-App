import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import './LoginForm.css'

export default function LoginForm({ setUser, setIsAuthenticated }) {

    const [loginUsername, setLoginUsername] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [loginError, setLoginError] = useState([])

    const navigate = useNavigate()

    const loginOnSubmit = (e) => {
        e.preventDefault()
        const user = {
            username: loginUsername,
            password: loginPassword
        }
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json()
                .then(user => {
                    setUser(user)
                    setIsAuthenticated(true)
                    navigate('/home')
                })
            } else {
                    res.json()
                    .then(json => setLoginError(json.error))
                }
        })
    }


  return <div>
            <form onSubmit={loginOnSubmit} className="form">
                <div className="container1">
                    <div className="container4">
                        <h3 className="login-h3">Login</h3>
                    </div>
                    <input 
                        type="text"
                        value={loginUsername}
                        onChange={(e) => setLoginUsername(e.target.value)}
                        placeholder="username" 
                        name="uname" 
                        />
                    <input 
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="password" 
                        name="pwd" 
                        />
                    <div className="container2">
                        <button className="button1" type="submit">Login</button>
                    </div>
                </div>
                <div className="container3">
            {loginError ? <div>{loginError}</div> : null}
        </div>
    </form>
  </div>;
}
