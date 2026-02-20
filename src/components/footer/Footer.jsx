import './Footer.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>TravelWeb</h4>
          <p>Discover the world with us.</p>
        </div>

        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li>
              <a href="https://github.com/celesteag/travel-web" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow us</h4>
          <div className="footer-social">
            <a href="https://instagram.com/" className="instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/" className="facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://github.com/celesteag/travel-web" className="github" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 TravelWeb. All rights reserved.<br />
        <a href="/privacy">Privacy Policy</a> |
        <a href="/cookies"> Cookies Policy</a> |
        <a href="/terms"> Terms & Conditions</a>
      </div>
    </footer>
  )
}

export default Footer
