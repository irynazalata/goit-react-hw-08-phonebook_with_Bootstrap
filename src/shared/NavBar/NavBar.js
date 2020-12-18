import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './NavBar.module.css';
import UserMenu from '../../components/UserMenu/UserMenu';
import Loader from '../../shared/Loader/Loader';
import AuthNav from '../../components/AuthNav/AuthNav';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = ({ isAuthenticated, email }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              exact
              to="/"
              className={styles.listLink}
              activeClassName={styles.listLinkActive}
            >
              Home
            </NavLink>
            {isAuthenticated && (
              <NavLink
                exact
                to="/contacts"
                className={styles.listLink}
                activeClassName={styles.listLinkActive}
              >
                Contacts
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
        {isAuthenticated && !email && <Loader />}
        {isAuthenticated && email && <UserMenu />}
        {!isAuthenticated && <AuthNav />}
      </Container>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
  email: authSelectors.getUserEmail(state),
});
export default connect(mapStateToProps)(NavBar);
