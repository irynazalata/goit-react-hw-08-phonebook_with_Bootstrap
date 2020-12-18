import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              exact
              to="/register"
              className={styles.listLink}
              activeClassName={styles.listLinkActive}
            >
              Register
            </NavLink>
            <NavLink
              exact
              to="/login"
              className={styles.listLink}
              activeClassName={styles.listLinkActive}
            >
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AuthNav;
