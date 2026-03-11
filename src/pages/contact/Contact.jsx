import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Contact.css'

function Contact() {

  const position = [28.1235, -15.4363] // Las Palmas de Gran Canaria

  return (
    <main className="contact">

      <h1>Contact Me</h1>
      <p className="contact-intro">
        I'm always open to new opportunities, collaborations or freelance projects.
        Feel free to send me a message or reach out through the contact details below.
      </p>

      <section className="contact-container">

        <form className="contact-form">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Your message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

      </section>

      <section className="contact-info">

        <div className="info-cards">
          <div className="info-card">
            <a href="https://maps.google.com/?q=Las+Palmas+de+Gran+Canaria" target="_blank" rel="noopener noreferrer">
              <FaMapMarkerAlt className="icon" />
            </a>
            <h3>Localización</h3>
            <p>Las Palmas de Gran Canaria<br/>Las Palmas, Spain</p>
          </div>

          <div className="info-card">
            <a href="mailto:yourname@email.com">
              <MdEmail className="icon" />
            </a>
            <h3>Email</h3>
            <p>name@email.com</p>
          </div>
        </div>

      </section>

      <section className="contact-map">

        <h2>Ubicación</h2>

        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "400px", width: "100%" }}
        >

          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>
              <strong>My Location</strong><br/>
              Las Palmas, Spain
            </Popup>
          </Marker>

        </MapContainer>

      </section>

    </main>
  )
}

export default Contact