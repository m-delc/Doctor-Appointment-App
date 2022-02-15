import { useNavigate } from "react-router-dom";
import { useState } from 'react'
// import '../LoginForm/LoginForm.css'

export default function SignupForm({ setUser, setIsAuthenticated }) {

    const [signupFirstName, setSignupFirstName] = useState("");
    const [signupLastName, setSignupLastName] = useState("");
    const [signupUsername, setSignupUsername] = useState('')
    const [signupPassword, setSignupPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [signupErrors, setSignupErrors] = useState([])
    const navigate = useNavigate()

    function signupOnSubmit(e){
        e.preventDefault()
        // setSignupErrors([])
        const user = {
            first_name: signupFirstName,
            last_name: signupLastName,
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
                    setIsAuthenticated(true)
                    navigate('/home')

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
                        id="firstname"
                        placeholder="First Name"
                        value={signupFirstName}
                        onChange={(e) => setSignupFirstName(e.target.value)}
                        />
                    <input
                        type="text"
                        id="lastname"
                        placeholder="Last Name"
                        value={signupLastName}
                        onChange={(e) => setSignupLastName(e.target.value)}
                        />
                    <input 
                        type="text"
                        id="username"
                        placeholder="Username" 
                        value={signupUsername}
                        onChange={(e) => setSignupUsername(e.target.value)}
                        />
                    <input 
                        type="password"
                        id="password"
                        placeholder="Choose a password" 
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        />
                    <input 
                        type="password"
                        id="password_confirmation"
                        placeholder="Confirm password" 
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                    <button 
                        type="submit">Sign up
                    </button>
                </div>
            </form>
            { signupErrors ? signupErrors.map(e => <div key={e}>{e[1]}</div>) : null}

  </div>;
}