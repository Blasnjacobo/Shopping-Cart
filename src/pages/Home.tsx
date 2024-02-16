import Carrusel from "../components/Carrusel"
import Etiqueta from "../components/Etiqueta"
const Home = () => {
  return (
    <div>
      <div className="row" style={{ maxWidth: '100vw' }}>
        <Etiqueta />
      </div>
      <div className="container" style={{ height: '100vh' }}>
        <Carrusel />
      </div>
    </div>
  )
}

export default Home