import './ServiceCard.css'

function ServiceCard({ title, image, description }) {
  return (
    <article className="service-card">
      <div className="service-image-container">
        <img src={image} alt={title} className="service-image" />
        <div className="service-overlay"></div> 
      </div>
      
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
        
        <button className="service-button">
          More information
          <span className="arrow">→</span>
        </button>
        {/* <a href={link} target="_blank" rel="noreferrer" className="service-button">
          Ver Proyecto 
          <span className="arrow">→</span>
        </a> */}
      </div>
    </article>
  )
}

export default ServiceCard