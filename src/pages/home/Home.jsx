import services from '../../data/skills'
import ServiceCard from '../../components/service-card/ServiceCard' 
import './Home.css';

function Home() {
  return (
    <main className="home">
      <h3 className="home-title">Skills</h3>

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
    </main>
  )
}

export default Home;
