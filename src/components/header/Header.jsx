import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from '/src/logo/travel-web-logo.png'

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <nav className="header-nav left">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
        </nav>

        <NavLink to="/" className="header-logo">
          <img src={logo} alt="TravelWeb logo" />
        </NavLink>

        <nav className="header-nav right">
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </nav>

      </div>
    </header>
  )
}

export default Header
