import { NavLink } from 'react-router-dom';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>MySpace</h4>
          <p>Discover my projects and skills.</p>
        </div>

        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li>
              <a href="https://github.com/celesteag/travel-web" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow me</h4>
          <div className="footer-social">
            <a href="https://instagram.com/" className="instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/celestearbelogarcia/" className="linkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/celesteag/travel-web" className="github" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="/rss/tech-news.xml" target="_blank" rel="noopener noreferrer">
              <img src="/img/rss-ico.png" alt="RSS Feed" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 MyPortfolio. All rights reserved.<br />
        <NavLink to="/privacy">Privacy Policy</NavLink> |
        <NavLink to="/cookies"> Cookies Policy</NavLink> |
        <NavLink to="/terms"> Terms & Conditions</NavLink>
      </div>
    </footer>
  )
}

export default Footer
