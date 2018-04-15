import React, { Component } from 'react';
import me from '../images/me.png';

class ProfilePic extends Component {

    render() {
        return (
            <div className="row">
              <div className="col-md-6 ml-auto mr-auto">
                <div className="profile">
                  <div className="avatar">
                    <img src={me} alt="Circle Image" className="img-raised rounded-circle img-fluid" />
                  </div>
                  <div className="name">
                    <h3 className="title">Luke Murray</h3>
                      <h6>Software engineer</h6>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default ProfilePic;
