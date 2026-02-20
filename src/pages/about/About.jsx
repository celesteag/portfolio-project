import './About.css'

function About() {
  return (
    <main className="about">
      <h1 className="about-title">Sobre el Proyecto</h1>

      <section className="about-intro">
        <p>
          Este espacio ha sido diseñado como un escaparate de mi evolución en el 
          Grado Superior de <strong>Desarrollo de Aplicaciones Web (DAW)</strong>.
        </p>
        <p>
          Más que una simple web, este es el núcleo donde centralizo mi aprendizaje, 
          fusionando el diseño de interfaces modernas con la lógica de programación.
        </p>
      </section>

      <section className="about-mission">
        <h2>Mi Hoja de Ruta</h2>
        <p>
          Este es el <strong>futuro espacio</strong> donde se alojarán todos los proyectos realizados 
          a lo largo del ciclo formativo. Mi intención es ir integrando nuevos conocimientos 
          en esta interfaz, convirtiéndola en un registro real de mi progreso técnico, 
          desde los primeros scripts hasta aplicaciones full-stack complejas.
        </p>
      </section>

      <section className="about-values">
        <h2>Pilares de Aprendizaje</h2>

        <div className="values">
          <div className="value-card">
            <h3>Arquitectura</h3>
            <p>Entender qué ocurre bajo el capó, desde el hardware hasta el despliegue en la nube.</p>
          </div>

          <div className="value-card">
            <h3>Resolución</h3>
            <p>Capacidad para descomponer problemas complejos en algoritmos lógicos y funcionales.</p>
          </div>

          <div className="value-card">
            <h3>Adaptabilidad</h3>
            <p>Aprendizaje constante de nuevos frameworks y lenguajes en el entorno IT.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About