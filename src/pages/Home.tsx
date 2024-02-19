import Carrusel from "../components/Carrusel"
import Etiqueta from "../components/Etiqueta"
import Footer from "../components/Footer"
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
      <Footer />
    </div>
  )
}

export default Home