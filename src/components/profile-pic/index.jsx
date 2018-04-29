import React from 'react';
import me from '../images/me.png';

import './profile-pic.css';

const ProfilePic = () =>
  (
    <div className="row">
      <div className="col-md-6 ml-auto mr-auto">
        <div className="profile">
          <div className="avatar">
            <img src={me} alt="" className="img-raised rounded-circle img-fluid" />
          </div>
          <div className="name">
            <h3 className="profile-title">Luke Murray</h3>
            <h6>Software engineer</h6>
          </div>
        </div>
      </div>
    </div>
  );

export default ProfilePic;
