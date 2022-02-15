import '../App.css';
import { React, useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login"
import Navbar from "./Navbar/Navbar"
import Home from './Home/Home'
import About from './About/About'
import Appointments from './Appointments/Appointments'
import MakeAppointment from './MakeAppointment/MakeAppointment'

function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)
    // const [doctorList, setDoctorList] = useState([])
    
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

    //   fetch('/doctors')
    //   .then(res => {
    //     if (res.ok) {
    //       res.json()
    //       .then(docs => {
    //         setDoctorList(docs)
    //       })
    //     }
    //   })
      
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



    if (!isAuthenticated) return <Login error={"Please Login"} setUser={setUser} setIsAuthenticated={setIsAuthenticated} />

    return (
      
        <div className="container">
          <Navbar setUser={setUser} setIsAuthenticated={setIsAuthenticated} user={user} />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home user={user} />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/appointments" element={<Appointments user={user} />} />
            <Route path="/makeappointment" element={<MakeAppointment user={user} /* doctorList={doctorList} */ />} />
          </Routes>
        </div>

      );
}

export default App;