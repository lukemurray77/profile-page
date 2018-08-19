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
            <div className="social-stuff">
              <a className="social-button" rel="tooltip noopener noreferrer" title="" data-placement="bottom" href="https://github.com/lukemurray77" target="_blank" data-original-title="See my work on Github!">
                <i className="fa fa-github" />
              </a>
              <a className="social-button" rel="tooltip noopener noreferrer" title="" data-placement="bottom" href="https://www.facebook.com/luke.murray.585?ref=bookmarks" target="_blank" data-original-title="Find me on Facebook">
                <i className="fa fa-facebook-square" />
              </a>
              <a className="social-button" rel="tooltip noopener noreferrer" title="" data-placement="bottom" href="https://www.facebook.com/luke.murray.585?ref=bookmarks" target="_blank" data-original-title="Find me on LinkedIn">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default ProfilePic;
