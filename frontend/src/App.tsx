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
import { useEffect, useState } from 'react';
import { User } from './type/User'
//TO RUN THE PROGRAM THE COMMAND USED IS npm run dev

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost:5000/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }).then(response => {
        if (response.status === 200) return response.json();
        throw new Error('Authentication has failed!');
      }).then(resObject => {
        setUser(resObject.user);
      }).catch(err => {
        console.log(err);
      });
    };
    getUser();
  }, []);

  console.log(user)
  return (
    <ShoppingCartProvider>
      <Navbar user={user} />
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
  )
}

export default App
