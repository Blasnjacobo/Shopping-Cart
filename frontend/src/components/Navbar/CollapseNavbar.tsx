import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

interface Props {
  collapseHandler: () => void; // Define props interface
}

const CollapseNavbar: React.FC<Props> = ({ collapseHandler }) => { // Use props interface
    return (
        <div>
            <Nav className='me-auto flex-center gap-4'>
                <Nav.Link to='/' as={NavLink} style={{ color: 'red' }} onClick={collapseHandler}>
                    Home
                </Nav.Link>
                <Nav.Link to='/dama' as={NavLink} style={{ fontWeight: 'bold' }} onClick={collapseHandler}>
                    Dama
                </Nav.Link>
                <Nav.Link to='/caballero' as={NavLink} style={{ fontWeight: 'bold' }} onClick={collapseHandler}>
                    Caballero
                </Nav.Link>
                <Nav.Link to='/unisex' as={NavLink} style={{ fontWeight: 'bold' }} onClick={collapseHandler}>
                    Unisex
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default CollapseNavbar;
