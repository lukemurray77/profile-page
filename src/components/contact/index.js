import React, { Component } from 'react';

class Contact extends Component {

    render() {
        return (
          <div class="section section-contacts">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto">
                <h2 class="text-center title">Work with us</h2>
                <h4 class="text-center description">Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours.</h4>
                <form class="contact-form">
                  <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Your Name</label>
                          <input type="email" class="form-control" />
                        </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="bmd-label-floating">Your Email</label>
                        <input type="email" class="form-control" />
                      </div>
                    </div>
                  </div>
                    <div class="form-group">
                      <label for="exampleMessage" class="bmd-label-floating">Your Message</label>
                      <textarea type="email" class="form-control" rows="4" id="exampleMessage"></textarea>
                    </div>
                    <div class="row">
                      <div class="col-md-4 ml-auto mr-auto text-center">
                        <button class="btn btn-primary btn-raised">
                            Send Message
                        </button>
                      </div>
                    </div>
                  </form>
              </div>
            </div>
          </div>
        );
    }
}

export default Contact;
