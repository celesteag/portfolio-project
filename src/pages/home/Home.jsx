import services from '../../data/skills'
import ServiceCard from '../../components/service-card/ServiceCard'
import './Home.css';
import { useState } from 'react';

function Home() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <main className="home">
      <h3 className="home-title">Skills</h3>

      <button
        className="toggle-button"
        onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Ocultar Skills' : 'Mostrar Skills'}
      </button>

    {isVisible &&(
      <section className="destinations">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            image={service.image}
            description={service.description}
          />
        ))}
      </section>
    )}
    </main>
  )
}

export default Home;
