import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const CollapseNavbar = () => {
    return (
        <div>
            <Nav className='me-auto d-flex gap-4 align-items-center justify-content-center'>
                <Nav.Link to='/shopping-cart' as={NavLink} style={{ color: 'red' }}>
                    Home
                </Nav.Link>
                <Nav.Link to='/shopping-cart/dama' as={NavLink} style={{ fontWeight: 'bold' }}>
                    Dama
                </Nav.Link>
                <Nav.Link to='/shopping-cart/caballero' as={NavLink} style={{ fontWeight: 'bold' }}>
                    Caballero
                </Nav.Link>
                <Nav.Link to='/shopping-cart/unisex' as={NavLink} style={{ fontWeight: 'bold' }}>
                    Unisex
                </Nav.Link>
                <Nav.Link to='/shopping-cart/about' as={NavLink} style={{ fontWeight: 'bold' }}>
                    About
                </Nav.Link>
            </Nav>
        </div>
    )
}

export default CollapseNavbar
