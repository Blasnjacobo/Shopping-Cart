import { Routes, Route } from 'react-router-dom'
import ShoppingCartProvider from './context/Cart/Cart'
import PerfumesProvider from './context/Perfumes/Perfumes'
import UserProvider from './context/Users/User'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Dama from './pages/Dama'
import Caballero from './pages/Caballero'
import Unisex from './pages/Unisex'
import Item from './pages/Item'
import './app.css'

//TO RUN THE PROGRAM THE COMMAND USED IS npm run dev

function App() {
  return (
    <PerfumesProvider>
      <UserProvider>
        <ShoppingCartProvider>
          <Navbar />
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/dama' element={<Dama />} />
              <Route path='/caballero' element={<Caballero />} />
              <Route path='/Unisex' element={<Unisex />} />
              <Route path='/:_id' element={<Item />} />
            </Routes>
            <Footer />
          </div>
        </ShoppingCartProvider>
      </UserProvider>
    </PerfumesProvider>
  )
}

export default App
