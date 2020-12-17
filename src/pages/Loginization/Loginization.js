import React, { Component } from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import Notification from '../../shared/Notification/Notification';
import { Container } from 'react-bootstrap';
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
          <Notification
            error={Boolean(this.props.error)}
            message="You are not registered yet. Go to Register Page"
          ></Notification>
          <h1 className={styles.title}>Login page</h1>
          <form className={styles.form} onSubmit={this.handleSubmit}>
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
                onChange={this.handleChange}
                className={styles.input}
              />
            </label>
            <button className={styles.button}>Log in</button>
          </form>
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
