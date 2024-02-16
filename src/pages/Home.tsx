import Carrusel from "../components/Carrusel"
import Etiqueta from "../components/Etiqueta"
const Home = () => {
  return (
    <div>
      <div className="row">
        <Etiqueta />
      </div>
      <div className="container">
        <Carrusel />
      </div>
    </div>
  )
}

export default Home