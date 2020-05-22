import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  NavbarToggler,
} from 'reactstrap';
import { useFetchUser } from '../../lib/user';
import styles from './NavBar.module.css';

const createNavItem = ({ href, text, className }) => (
  <NavItem>
    <NavLink href={href} className={className}>
      {text}
    </NavLink>
  </NavItem>
);

function NavBar() {
  const { user, loading } = useFetchUser();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="dark" dark expand="lg" fixed="top">
        <NavbarBrand href="/">
          <img src="/logo.svg" alt="Logo" className={styles.logo} />
          Track Map Dashboard
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/map" className="text-light h5">
                Map
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" className="text-light h5">
                About
              </NavLink>
            </NavItem>
            {!loading && user ? (
              <NavItem>
                <NavLink href="/api/logout" className="text-light h5">
                  Logout
                </NavLink>
              </NavItem>
            ) : (
              <NavItem>
                <NavLink href="/api/logon" className="text-light h5">
                  Login
                </NavLink>
              </NavItem>
            )}
          </Nav>
          {!loading && user && (
            <NavbarText className="align-self-center text-left font-weight-bold">
              <img
                src="/images/profile1.jpg"
                className={`border rounded-circle ${styles['img-42']} img-fluid mr-1`}
              />
              {user.name}
            </NavbarText>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
