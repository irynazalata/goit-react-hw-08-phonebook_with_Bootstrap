import React from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import styles from './Home.module.css';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Container>
        <div className={styles.container}>
          <h1 className={styles.mainTitle}>
            Welcome to your Personal Phonebook!
          </h1>
          <p className={styles.text}>
            This is the place where you can safely keep all your contacts.
          </p>
          <h2 className={styles.title}>Let's start &#128640;</h2>
          <p className={styles.text}>
            First of all, you need to register{' '}
            <NavLink exact to="/register" className={styles.listLink}>
              here
            </NavLink>
          </p>
          <p className={styles.text}>
            If you are already registered, just{' '}
            <NavLink exact to="/login" className={styles.listLink}>
              Log in
            </NavLink>{' '}
            and check your{' '}
            <NavLink exact to="/contacts" className={styles.listLink}>
              Contacts
            </NavLink>
          </p>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
