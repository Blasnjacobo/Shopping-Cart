import Carrusel from "../components/Carrusel"
import Etiqueta from "../components/Etiqueta"
import Marcas from "../components/Marcas"
const Home = () => {
  return (
    <div>
      <div className="row">
        <Etiqueta />
      </div>
      <div className="container">
        <Carrusel />
        <hr className="hr" />
        <Marcas />
      </div>
    </div>
  )
}

export default Home