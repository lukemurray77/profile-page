import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import request from 'request-promise';
import validateEmail from './validate-email';

import './contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      text: '',
      verifyCaptcha: null,
      sent: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onSend = this.onSend.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.recaptchaInstance = null;
  }
  onInputChange(value, key) {
    this.setState({
      [key]: value,
      [`${key}Error`]: null,
      sent: false,
      sentError: '',
    });
  }

  onSend(e) {
    e.preventDefault();
    if (this.validateForm()) {
      this.setState({
        sent: false,
        sentError: '',
      });

      const options = {
        method: 'POST',
        uri: process.env.API_URL,
        body: this.state,
        json: true, // Automatically stringifies the body to JSON
        headers: {
          'Content-Type': 'application/json',
        },
      };

      request(options)
        .then(() => {
          this.resetRecaptcha();
          this.setState({
            email: '',
            text: '',
            name: '',
            sent: true,
            verifyCaptcha: null,
          });
        })
        .catch((err) => {
          if (err) {
            this.resetRecaptcha();
            this.setState({
              sent: false,
              sentError: err.error.message,
              verifyCaptcha: null,
            });
          }
        });
    } else {
      this.setFormErrors();
    }
  }

  onNameChange(e) {
    return this.onInputChange(e.target.value, 'name');
  }
  onEmailChange(e) {
    return this.onInputChange(e.target.value, 'email');
  }

  onloadCallback() {
    console.log('LOADED');
  }

  onTextChange(e) {
    return this.onInputChange(e.target.value, 'text');
  }

  setFormErrors() {
    const { name, text, email } = this.state;
    const formErrors = {};
    if (!name) formErrors.nameError = 'Please enter a name.';
    if (!text) formErrors.textError = 'Please enter a message.';
    if (!validateEmail(email)) formErrors.emailError = 'Please enter a valid email.';
    this.setState({
      ...formErrors,
    });
  }

  expiredCallback() {
    this.resetRecaptcha();
  }

  validateForm() {
    const { name, text, email } = this.state;
    return name && text && validateEmail(email);
  }

  verifyCallback(token) {
    this.setState({
      verifyCaptcha: token,
    });
  }
  resetRecaptcha() {
    this.recaptchaInstance.reset();
  }

  render() {
    const sentMessage = this.state.sent
      ? (
        <div className="sent-message">
          <p>Message sent, I will get back to you shortly!</p>
        </div>
      )
      : null;

    const sentError = this.state.sentError
      ? (
        <div className="sent-message-error">
          <p>{this.state.sentError}</p>
        </div>
      ) : null;

    const nameError = this.state.nameError ? (
      <div className="form-errors">
        <p className="form-error-message">{this.state.nameError}</p>
      </div>
    ) : null;
    const textError = this.state.textError ? (
      <div className="form-errors">
        <p className="form-error-message">{this.state.textError}</p>
      </div>
    ) : null;
    const emailError = this.state.emailError ? (
      <div className="form-errors">
        <p className="email-form-error-message">{this.state.emailError}</p>
      </div>
    ) : null;

    const disabledButton = !this.state.verifyCaptcha;
    const disabledClassname = !this.state.verifyCaptcha ? '-disabled' : '';
    return (
      <div className="contact-container">
        <form>
          <div className="text-center" style={{ width: '100%' }}>
            <h2 className="title">CONTACT ME</h2>
          </div>
          <div className="row col-md-9 m-auto">
            <div className="col-md-12 form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                value={this.state.name}
                onChange={this.onNameChange}
              />
              {nameError}
            </div>
            <div className="col-md-12 form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your email"
                value={this.state.email}
                onChange={this.onEmailChange}
              />
              {emailError}
            </div>
            <div className="col-md-12 form-group">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter your message here"
                value={this.state.text}
                onChange={this.onTextChange}
              />
              {textError}
            </div>
            <div className="form-buttons">
              <button type="submit" className={`btn btn-primary send-button${disabledClassname}`} disabled={disabledButton} onClick={this.onSend}>Send</button>
              {sentMessage}
              {sentError}
            </div>
            <div className="recaptcha-button ml-auto">
              <Recaptcha
                sitekey={process.env.SITE_KEY}
                ref={(e) => { this.recaptchaInstance = e; }}
                render="explicit"
                size="compact"
                verifyCallback={this.verifyCallback}
                onloadCallback={this.callback}
                expiredCallback={this.expiredCallback}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
