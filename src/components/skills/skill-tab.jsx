import React from 'react';

const SkillTab = () =>
  (
    <div className="profile-tabs">
      <ul className="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
        <li className="nav-item">
          <a className="nav-link active show" href="#frontend" role="tab" data-toggle="tab">
            <i className="material-icons">web</i> Front End
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#backend" role="tab" data-toggle="tab">
            <i className="material-icons">code</i> Back End
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#devops" role="tab" data-toggle="tab">
            <i className="material-icons">build</i> Tools
          </a>
        </li>
      </ul>
    </div>
  );

export default SkillTab;
