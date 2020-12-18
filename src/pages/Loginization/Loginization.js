import React, { Component } from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import Notification from '../../shared/Notification/Notification';
import { Container, Form, Button } from 'react-bootstrap';
import styles from './Loginization.module.css';

class Loginization extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onLogin({ ...this.state });
    this.setState({ email: '', password: '' });
  };
  render() {
    const { email, password } = this.state;

    return (
      <>
        <NavBar />
        <Container>
          <h1 className={styles.title}>Login page</h1>
          <Form
            onSubmit={this.handleSubmit}
            className="w-25"
            className={styles.form}
          >
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
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className={styles.button}>
              Log in
            </Button>
            <Notification
              error={Boolean(this.props.error)}
              message="You are not registered yet. Go to Register Page"
            ></Notification>
          </Form>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  error: authSelectors.getErrorMessage(state),
});
export default connect(mapStateToProps, { onLogin: authOperations.login })(
  Loginization,
);
