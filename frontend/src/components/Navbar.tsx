import { Container, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import CollapseNavbar from './CollapseNavbar'
import Cart from './Cart'
import SignInIcon from './LogIcon'
import { User } from '../type/User'
import SignOutUser from './SignOutUser'

interface userPromp {
  user: User
}

const Navbar = ({ user }: userPromp) => {
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
        <Cart />
        {
          !user ? <SignInIcon /> : <SignOutUser user={user} />
        }
      </Container>
    </NavbarBs>
  )
}

export default Navbar
