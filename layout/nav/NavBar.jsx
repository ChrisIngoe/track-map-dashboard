import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { useFetchUser } from '../../lib/user';

function NavBar() {
  //const [user, { mutate }] = useUser();
  const { user, loading } = useFetchUser();

  const logoutHandler = async e => {
    e.preventDefault();
    try {
      const res = await fetch('/api/logout', {
        method: 'GET',
      });
      if (res.status === 204) {
        mutate(null);
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      //setErrorMsg(error.message);
    }
  };

  return (
    <div>
      <Navbar color="dark" dark expand="sm" fixed="top">
        <NavbarBrand href="/">
          <img src="/logo.svg" alt="Logo" className="logo" />
          Track Map Dashboard
        </NavbarBrand>
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#" className="d-none d-sm-block"></NavLink>
            </NavItem>
          </Nav>
          {!loading && user ? (
            <UncontrolledDropdown inNavbar>
              <DropdownToggle caret nav className="text-secondary">
                <NavbarText className="align-self-center text-left font-weight-bold">
                  <img
                    src="/images/profile1.jpg"
                    className="border rounded-circle img-42 img-fluid mr-1"
                  />
                  {user.name}
                </NavbarText>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="div">
                  <NavLink href="/api/logout" className="text-dark">
                    <i className="fas fa-home"></i> Logout
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          ) : (
            <NavItem>
              <NavLink href="/api/login" className="text-light h5">
                Login
              </NavLink>
            </NavItem>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
