import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'
import logo from '../assets/logo.png'

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart()

  return (
    <NavbarBs sticky='top' expand="md" className='bg-white shadow-sm mb-3'>
      <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <NavbarBs.Brand as={NavLink} to='/shopping-cart'>
          <img src={logo} alt="Logo" style={{ maxHeight: '3rem' }} />
        </NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls="navbarNav" />
        <NavbarBs.Collapse id="navbarNav">
          <Nav className='me-auto d-flex gap-4 align-items-center justify-content-center'>
            <Nav.Link to='/shopping-cart' as={NavLink} style={{ color: 'red' }}>
              Home
            </Nav.Link>
            <Nav.Link to='/shopping-cart/harryPotter' as={NavLink} style={{ fontWeight: 'bold' }}>
              Dama
            </Nav.Link>
            <Nav.Link to='/shopping-cart/avengers' as={NavLink} style={{ fontWeight: 'bold' }}>
              Caballero
            </Nav.Link>
            <Nav.Link to='/shopping-cart/friends' as={NavLink} style={{ fontWeight: 'bold' }}>
              Juveniles
            </Nav.Link>
            <Nav.Link to='/shopping-cart/starWars' as={NavLink} style={{ fontWeight: 'bold' }}>
              Contactanos
            </Nav.Link>
          </Nav>
        </NavbarBs.Collapse>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: '3rem', height: '3rem', position: 'relative' }}
            variant='outline-primary'
            className='rounded-circle'
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="pink"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            <div className='rounded-circle bg-black d-flex justify-content-center align-items-center'
              style={{
                color: 'white',
                width: '1.8rem',
                height: '1.8rem',
                position: 'absolute',
                bottom: 35,
                right: 0,
                transform: 'translate(35%, 35%)'
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  )
}

export default Navbar
