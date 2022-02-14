import '../App.css';
import { React, useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login"
import Navbar from "./Navbar/Navbar"
import Home from './Home/Home'
import About from './About/About'
import Profile from './Profile/Profile'
import Appointments from './Appointments/Appointments'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  // const [logoutMessage, setLogoutMessage] = useState("")
  // const [loginMessage, setLoginMessage] = useState('')
  
  useEffect(() => {
    fetch('/authorized_user')
    .then(res => {
        if (res.ok) {
          res.json()
          .then(user => {
            setIsAuthenticated(true)
            setUser(user)
          })
        }
      })
    }, [])
    
    // Playing around with useEffect, not important
    // Playing around with useEffect, not important
    // Playing around with useEffect, not important
    useEffect(() => {
      return user ? console.log(`Current user is ${user.username}`) : null
    }, [user])
    
    useEffect(() => {
      return !user ? console.log(`No user is currently logged in`) : null
    }, [user])

    // Not working
    // Not working
    // Not working
    // useEffect(() => {
    //     return !isAuthenticated ? console.log("No user is currently authenticated") : null
    //   }, [isAuthenticated])
    // useEffect(() => {
    //   return isAuthenticated ? console.log(`The user ${user.username} is currently authenticated`) : null
    // }, [isAuthenticated, user])




// this requires the user to authenticate. component is still called "<Login />" but really it is login/signup, i just have to change it
// this requires the user to authenticate. component is still called "<Login />" but really it is login/signup, i just have to change it
// this requires the user to authenticate. component is still called "<Login />" but really it is login/signup, i just have to change it
if (!isAuthenticated) return <Login error={"Please Login"} setUser={setUser} setIsAuthenticated={setIsAuthenticated} />


  return (
    
      <div className="container">
        <Navbar setUser={setUser} setIsAuthenticated={setIsAuthenticated} user={user} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </div>

    );
}

export default App;