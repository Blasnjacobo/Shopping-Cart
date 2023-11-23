import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './pages/Home'
import HarryPotter from './pages/HarryPotter'
import Avengers from './pages/Avengers'
import Navbar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import Friends from './pages/Friends'
import StarWars from './pages/StarWars'
import BreakingBad from './pages/BreakingBad'

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container  className='mb-4'>
        <Routes>
          <Route path='/shopping-cart' element={<Home />} />
          <Route path='/shopping-cart/harryPotter' element={<HarryPotter />} />
          <Route path='/shopping-cart/avengers' element={<Avengers />} />
          <Route path='/shopping-cart/friends' element={<Friends />} />
          <Route path='/shopping-cart/starWars' element={<StarWars />} />
          <Route path='/shopping-cart/breakingBad' element={<BreakingBad />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
