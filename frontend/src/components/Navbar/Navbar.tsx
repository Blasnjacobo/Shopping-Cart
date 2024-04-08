import React, { useState, useRef, useEffect } from 'react';
import { Container, Navbar as NavbarBs } from 'react-bootstrap';
import CollapseNavbar from './CollapseNavbar';
import CarritoLogo from '../Cart/CarritoLogo';
import SignInIcon from '../login/LogIcon';
import Perfil from '../login/Perfil';
import useUser from '../../context/Users/useUser';

const Navbar = () => {
  const user = useUser();
  const [collapsed, setCollapsed] = useState(true);
  const navbarRef = useRef<HTMLDivElement>(null); // Properly typing the useRef

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => { // Properly typing the event parameter
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) { // Ensuring contains property is accessed on a valid type
        setCollapsed(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <NavbarBs sticky='top' expand="md" className='bg-white shadow-sm mb-3' ref={navbarRef}>
      <Container>
        <NavbarBs.Toggle aria-controls="navbarNav" onClick={toggleCollapse} />
        <NavbarBs.Collapse id="navbarNav" in={!collapsed}>
          <CollapseNavbar />
        </NavbarBs.Collapse>
        <CarritoLogo />
        {
          !user ? <SignInIcon /> : <Perfil user={user} />
        }
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
