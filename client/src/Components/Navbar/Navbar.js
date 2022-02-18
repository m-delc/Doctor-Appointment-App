import { NavLink } from "react-router-dom";
import { React } from 'react'
import './Navbar.css'

export default function Navbar({ setIsAuthenticated, user, setUser }) {


  

  const logout = () => {
    fetch('/logout', {
      method: "DELETE"
    })
    .then(() =>{
      setUser(null)
      setIsAuthenticated(false);
    })
  }

  return (
    <header>
      <div className="topnav">
        <nav>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/makeappointment'>Make Appointment</NavLink>
        <NavLink to='/appointments'>{user? user.first_name : null}'s Appointments</NavLink>
        <NavLink to='/' onClick={logout}>Logout</NavLink>
        </nav>
      </div>
    </header>
  )
}