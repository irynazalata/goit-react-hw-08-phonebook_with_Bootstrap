import React, { Component } from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import Notification from '../../shared/Notification/Notification';
import { Container, Form, Button } from 'react-bootstrap';
import styles from './Registration.module.css';

class Registration extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onRegister({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };
  render() {
    const { email, password, name } = this.state;
    return (
      <>
        <NavBar />
        <Container>
          <h1 className={styles.title}>Register page</h1>
          <Form onSubmit={this.handleSubmit} className={styles.form}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter minimum 7 symbols"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className={styles.button}>
              Register
            </Button>
            {typeof this.props.error === 'string' && (
              <Notification
                error={Boolean(this.props.error)}
                message="Your registration failed. Try again"
              ></Notification>
            )}
          </Form>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  error: authSelectors.getErrorMessage(state),
});

export default connect(mapStateToProps, {
  onRegister: authOperations.register,
})(Registration);
