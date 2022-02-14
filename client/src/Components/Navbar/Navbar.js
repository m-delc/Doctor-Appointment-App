import { useNavigate, Link } from "react-router-dom";
import { React } from 'react'
import './Navbar.css'

export default function Navbar({ setIsAuthenticated, user, setUser }) {

  // how to set active link in navbar?
  // how to set active link in navbar?
  // how to set active link in navbar?
  // const [activeLink, setActiveLink] = useState()
  const navigate = useNavigate()

  

  const logout = () => {
    fetch('/logout', {
      method: "DELETE"
    })
    .then(() =>{
      setIsAuthenticated(false);
      setUser(null)
      // setLogoutMessage("You are logged out")
      navigate('./home')
    })
  }

  return (
    <header>
      <div className="topnav">
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/home' onClick={logout}>Logout</Link>
        <Link to='/appointments'>{user? user.username : null}'s appointments</Link>
      </div>
    </header>
  )
}
