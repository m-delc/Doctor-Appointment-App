import React, {useState} from "react";
import LoginForm from "../LoginForm/LoginForm"
import SignupForm from "../SignupForm/SignupForm"

export default function Login({ setUser, setIsAuthenticated }) {

    const [showLogin, setShowLogin] = useState(true)



  return (
        <div>
            {showLogin ? (
                <>
                    <LoginForm setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
                    <p>
                        No Account?
                        <button onClick={() => setShowLogin(false)}>
                            Sign up
                        </button>
                    </p>
                </>
            ) : (
                <>
                    <SignupForm setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
                    <p>
                        Already have an account?
                        <button onClick={() => setShowLogin(true)}>
                            Log In
                        </button>
                    </p>
                </>
            )}
        </div>
  )
}
