import '../App.css';
import { React, useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login"
import Navbar from "./Navbar/Navbar"
import Home from './Home/Home'
import About from './About/About'
// import Profile from './Profile/Profile'
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
              // console.log(user)
              
              setIsAuthenticated(true)
              setUser(user)
            })
          }
        })
      }, [])

      console.log(isAuthenticated)

      
      // Playing around with useEffect, not important
      // Playing around with useEffect, not important
      // Playing around with useEffect, not important
      useEffect(() => {
        return user ? console.log(`Current user is ${user.username}`) : null
      }, [user])
      
      useEffect(() => {
        return !user ? console.log(`No user is currently logged in`) : null
      }, [user])



    if (!isAuthenticated) return <Login error={"Please Login"} setUser={setUser} setIsAuthenticated={setIsAuthenticated} />

    return (
      
        <div className="container">
          <Navbar setUser={setUser} setIsAuthenticated={setIsAuthenticated} user={user} />
          <Routes>
            <Route path="/about" element={<About />} />
            {/* <Route path="/profile" element={<Profile user={user} setUser={setUser} />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/appointments" element={<Appointments user={user} />} />
          </Routes>
        </div>

      );
}

export default App;