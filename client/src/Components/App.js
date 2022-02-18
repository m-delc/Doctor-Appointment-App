import '../App.css';
import { React, useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login"
import Navbar from "./Navbar/Navbar"
import Home from './Home/Home'
import Appointments from './Appointments/Appointments'
import MakeAppointment from './MakeAppointment/MakeAppointment'


function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)
    const [doctors, setDoctors] = useState([])
    const [appointments, setAppointments] = useState([])

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

        fetch('/doctors')
        .then(res => {
          if (res.ok) {
            res.json()
            .then(doctorData => {
              setDoctors(doctorData)
            })
          }
        })

        fetch('/appointments')
        .then(res => {
          if (res.ok) {
            res.json()
            .then(appointmentData => {
              setAppointments(appointmentData)
            })
          }
        })
      }, [isAuthenticated])

    if (!isAuthenticated) return <Login error={"Please Login"} setUser={setUser} setIsAuthenticated={setIsAuthenticated} />

    return (

      <>
        <div className="navbar">
          <Navbar setUser={setUser} setIsAuthenticated={setIsAuthenticated} user={user} />      
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home user={user} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/appointments" element={<Appointments user={user} appointments = {appointments} setAppointments = {setAppointments} />} />
            <Route path="/makeappointment" element={<MakeAppointment user={user} doctors={doctors} appointments = {appointments} setAppointments= {setAppointments} />} />
          </Routes>
        </div>
      </>
      );
}

export default App;