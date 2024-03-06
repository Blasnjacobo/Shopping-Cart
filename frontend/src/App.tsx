import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import Footer from './components/Footer'
import Dama from './pages/Dama'
import Caballero from './pages/Caballero'
import Unisex from './pages/Unisex'
import About from './pages/About'
import Item from './components/Item'
import { UserProvider } from './context/User'

//TO RUN THE PROGRAM THE COMMAND USED IS npm run dev

function App() {
  return (
    <UserProvider>
      <ShoppingCartProvider>
        <Navbar />
        <div>
          <Routes>
            <Route path='/shopping-cart' element={<Home />} />
            <Route path='/shopping-cart/dama' element={<Dama />} />
            <Route path='/shopping-cart/caballero' element={<Caballero />} />
            <Route path='/shopping-cart/Unisex' element={<Unisex />} />
            <Route path='/shopping-cart/about' element={<About />} />
            <Route path='/shopping-cart/:id' element={<Item />} />
          </Routes>
          <Footer />
        </div>
      </ShoppingCartProvider>
    </UserProvider>
  )
}

export default App
