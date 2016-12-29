/* eslint-disable no-return-assign*/
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './Login.css';
import fbStyles from '../../styles/flexboxgrid.css';

import { logUserIn } from './LoginActions';
import { getAuthenticatedStatus, getLoginError } from './LoginReducer';

const errorMessages = {
  nameError: 'Your name is required',
  emailError: 'Your email is required',
  passLengthError: 'Password must be at minimum 8 characters long',
};
const formsyStyles = { fontDecor: { fontFamily: 'AvenirNext', fontSize: '14px', letterSpacing: '2px', textAlign: 'center' } };

class Login extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
    this.notifyFormError = this.notifyFormError.bind(this);
  }

  submitForm(data) {
    this.props.dispatch(logUserIn(data));
    this.usernameText.setState({ value: '' });
    this.passwordText.setState({ value: '' });
  }

  notifyFormError(data) {
    console.log('Error submitting form: ', data); // eslint-disable-line
  }

  renderErrorMessage() {
    return this.props.loginError
      ? <div className="alert alert-danger">{this.props.loginError.message}</div>
      : <div></div>;
  }

  render() {
    return (
      <div className={`${fbStyles['container-fluid']}`}>
        <div className={`${fbStyles.row}`}>
          <div className={styles['login-form']}>
            <h1>Login</h1>
            {this.renderErrorMessage()}
            <Formsy.Form
              onValid={this.enableSubmit}
              onInvalid={this.disableSubmit}
              onValidSubmit={this.submitForm}
              onInvalidSubmit={this.notifyFormError}
            >
              <FormsyText
                name="username"
                floatingLabelFocusStyle={formsyStyles.fontDecor}
                floatingLabelStyle={formsyStyles.fontDecor}
                hintStyle={formsyStyles.fontDecor}
                inputStyle={formsyStyles.fontDecor}
                ref={node => this.usernameText = node}
                validations="isEmail"
                validationError={errorMessages.emailError}
                required
                hintText="What is your email?"
                floatingLabelText="Username"
              />
              <FormsyText
                name="password"
                type="password"
                floatingLabelFocusStyle={formsyStyles.fontDecor}
                floatingLabelStyle={formsyStyles.fontDecor}
                hintStyle={formsyStyles.fontDecor}
                inputStyle={formsyStyles.fontDecor}
                ref={node => this.passwordText = node}
                validations="minLength:8"
                validationError={errorMessages.passLengthError}
                required
                hintText="Enter Password"
                floatingLabelText="Password"
              /> <br /> <br />
              <RaisedButton
                type="submit"
                label="Login"
              />
            </Formsy.Form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: getAuthenticatedStatus(state),
    loginError: getLoginError(state),
  };
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  authenticated: PropTypes.string,
  loginError: PropTypes.object,
};

export default connect(
  mapStateToProps,
)(Login);
