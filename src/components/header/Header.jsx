import { NavLink } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { useAuth } from '../../context/AuthContext'
import './Header.css'
import logo from '/src/logo/my-space-new-logo.png'

function Header() {

  const { user } = useAuth()

  const handleLogout = () => {
    signOut(auth)
  }

  return (
    <header className="header">
      <div className="header-container">

        <nav className="header-nav left">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
          <NavLink to="/news" className="nav-link">News</NavLink>
        </nav>

        <NavLink to="/" className="header-logo">
          <img src={logo} alt="MySpace logo" />
        </NavLink>

        <nav className="header-nav right">
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
          {user && (
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          )}
        </nav>

      </div>
    </header>
  )
}

export default Header
