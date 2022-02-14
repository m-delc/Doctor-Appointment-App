import { useNavigate } from "react-router-dom";
import { useState } from 'react'
// import '../LoginForm/LoginForm.css'

export default function SignupForm({ setUser, setIsAuthenticated }) {

    // first name, last name
    const [signupName, setSignupName] = useState("");
    const [signupErrors, setSignupErrors] = useState([])
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [signupUsername, setSignupUsername] = useState('')
    const [signupPassword, setSignupPassword] = useState('')
    const navigate = useNavigate()

    function signupOnSubmit(e){
        e.preventDefault()
        // setSignupErrors([])
        const user = {
            name: signupName,
            username: signupUsername,
            password: signupPassword,
            password_confirmation: passwordConfirmation
        }
        fetch('/users', {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json()
                .then(user => {
                    setUser(user)
                    // console.log(user.username)
                    setIsAuthenticated(true)
                    navigate('/about')

                })
            } else {
                res.json()
                .then(json => setSignupErrors(Object.entries(json.error))
                )}
        })
    }

  return <div>
                <form onSubmit={signupOnSubmit} className="form">
                <div className="container1">
                    <div className="container4">
                        <h3 className="login-h3">Signup</h3>
                    </div>
                    <input
                        type="text"
                        id="name"
                        placeholder="name"
                        value={signupName}
                        onChange={(e) => setSignupName(e.target.value)}
                        />
                    <input 
                        type="text"
                        id="username"
                        placeholder="username" 
                        value={signupUsername}
                        onChange={(e) => setSignupUsername(e.target.value)}
                        />
                    <input 
                        type="password"
                        id="password"
                        placeholder="password" 
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        />
                    <input 
                        type="password"
                        id="password_confirmation"
                        placeholder="confirm password" 
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                    <button 
                        type="submit">Sign up
                    </button>
                </div>
            </form>
            {/* { signupErrors ? signupErrors.map(e => <div key={e}>{e[0]+' : ' + e[1]}</div>) : null} */}
            { signupErrors ? signupErrors.map(e => <div key={e}>{e[1]}</div>) : null}

  </div>;
}
