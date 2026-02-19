import destinations from '../../data/destinations'
import DestinationCard from '../../components/destination-card/DestinationCard'
import './Home.css'

function Home() {
  return (
    <main className="home">
      <h2 className="home-title">Popular Destinations</h2>

      <section className="destinations">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            title={destination.title}
            image={destination.image}
            description={destination.description}
          />
        ))}
      </section>
    </main>
  )
}

export default Home
