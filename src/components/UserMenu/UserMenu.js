import React from 'react';
import { authSelectors, authOperations } from '../../redux/auth';
import { connect } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import styles from './UserMenu.module.css';

const UserMenu = ({ email, onLogout }) => {
  return (
    <Container className="d-flex justify-content-end">
      <p className={styles.text}>
        You are logged in as <br />
        <span className={styles.span}>{email}</span>
      </p>
      <Button variant="danger" onClick={onLogout}>
        Logout
      </Button>
      {/* <button type="button" onClick={onLogout} className={styles.btn}>
        Logout
      </button> */}
    </Container>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
