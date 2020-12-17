import React, { Component } from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import Notification from '../../shared/Notification/Notification';
import { Container } from 'react-bootstrap';
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
          {typeof this.props.error === 'string' && (
            <Notification
              error={Boolean(this.props.error)}
              message="Your registration failed. Try again"
            ></Notification>
          )}
          <h1 className={styles.title}>Register page</h1>
          <form onSubmit={this.handleSubmit} className={styles.form}>
            <label className={styles.label}>
              Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                className={styles.input}
              />
            </label>
            <label className={styles.label}>
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                className={styles.input}
              />
            </label>
            <label className={styles.label}>
              Password
              <input
                type="password"
                name="password"
                value={password}
                placeholder="minimum 7 symbols"
                onChange={this.handleChange}
                className={styles.input}
              />
            </label>
            <button className={styles.button}>Register</button>
          </form>
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
