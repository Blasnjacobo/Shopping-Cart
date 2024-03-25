import { Container, Navbar as NavbarBs } from 'react-bootstrap'
import CollapseNavbar from './CollapseNavbar'
import CarritoLogo from '../Cart/CarritoLogo'
import SignInIcon from '../login/LogIcon'
import Perfil from '../login/Perfil'
import useUser from '../../context/Users/useUser';


const Navbar = () => {
  const user = useUser()
  return (
    <NavbarBs sticky='top' expand="md" className='bg-white shadow-sm mb-3'>
      <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <NavbarBs.Toggle aria-controls="navbarNav" />
        <NavbarBs.Collapse id="navbarNav">
          <CollapseNavbar />
        </NavbarBs.Collapse>
        <CarritoLogo />
        {
          !user ? <SignInIcon /> : <Perfil user={user} />
        }
      </Container>
    </NavbarBs>
  )
}

export default Navbar
