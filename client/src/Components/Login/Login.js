import React, {useState} from "react";
import LoginForm from "../LoginForm/LoginForm"
import SignupForm from "../SignupForm/SignupForm"
import '../LoginForm/LoginForm.css'

export default function Login({ setUser, setIsAuthenticated }) {

    const [showLogin, setShowLogin] = useState(true)



  return (
        <div className="login-signup-toggle">
            {showLogin ? (
                <>
                    <LoginForm setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
                    <div className="login-signup-toggle">
                        <p className="login-signup-toggle"> 
                            No Account?
                            <button onClick={() => setShowLogin(false)}>
                                Sign up
                            </button>
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <SignupForm setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
                    <div className="login-signup-toggle">
                        <p className="login-signup-toggle">
                            Already have an account?
                            <button onClick={() => setShowLogin(true)}>
                                Log In
                            </button>
                        </p>
                    </div>
                </>
            )}
        </div>
  )
}
