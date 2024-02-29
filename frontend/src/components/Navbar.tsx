import { Container, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import CollapseNavbar from './CollapseNavbar'
import Cart from './Cart'
import SignInIcon from './SignInIcon'

const Navbar = () => {
  return (
    <NavbarBs sticky='top' expand="md" className='bg-white shadow-sm mb-3'>
      <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <NavbarBs.Brand as={NavLink} to='/shopping-cart'>
          <img src={logo} alt="Logo" style={{ maxHeight: '3rem' }} />
        </NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls="navbarNav" />
        <NavbarBs.Collapse id="navbarNav">
          <CollapseNavbar />
        </NavbarBs.Collapse>
        <Cart />
        <SignInIcon />
      </Container>
    </NavbarBs>
  )
}

export default Navbar
