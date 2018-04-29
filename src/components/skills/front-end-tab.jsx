import React from 'react';
import './skills.css';

const FrontEndTab = props =>
  (
    <div className="tab-pane text-center gallery show active" id="frontend">
      <div className="row col-md-9 m-auto">
        <div className="col-md-2 m-auto">
          <img src={props.images.reactLogo} className="rounded react-image" alt="" />
          <img src={props.images.reduxLogo} className="rounded redux-image" alt="" />
        </div>
        <div className="col-md-2 m-auto">
          <img src={props.images.cssLogo} className="rounded css-image" alt="" />
          <img src={props.images.htmlLogo} className="rounded html-image" alt="" />
        </div>
        <div className="col-md-2 m-auto">
          <img src={props.images.bootstrapLogo} className="rounded bootstrap-image" alt="" />
          <img src={props.images.sassLogo} className="rounded sass-image" alt="" />
        </div>
        <div className="col-md-2 m-auto">
          <img src={props.images.jsLogo} className="rounded js-image" alt="" />
        </div>
      </div>
    </div>
  );

export default FrontEndTab;
