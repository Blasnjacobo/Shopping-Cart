import { Container, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from './logo.png'
import CollapseNavbar from './CollapseNavbar'
import CarritoLogo from '../Cart/CarritoLogo'
import SignInIcon from '../login/LogIcon'
import SignOutUser from '../login/SignOutUser'
import useUser from '../../context/Users/useUser';


const Navbar = () => {
  const user = useUser()
  return (
    <NavbarBs sticky='top' expand="md" className='bg-white shadow-sm mb-3'>
      <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <NavbarBs.Brand as={NavLink} to='/shopping-cart'>
          <img src={logo} alt="" style={{ maxWidth: '20vw', maxHeight: '7vh' }} />
        </NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls="navbarNav" />
        <NavbarBs.Collapse id="navbarNav">
          <CollapseNavbar />
        </NavbarBs.Collapse>
        <CarritoLogo />
        {
          !user ? <SignInIcon /> : <SignOutUser user={user} />
        }
      </Container>
    </NavbarBs>
  )
}

export default Navbar
