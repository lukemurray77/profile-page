import React from 'react';

const Tabs = props =>
  (
    <div className="col-md-4">
      <div className="info text-center">
        <div className={`icon icon-${props.logo}`}>
          <i className="material-icons">{props.icon}</i>
        </div>
        <h4 className="info-title">{props.cardTitle}</h4>
        <p>{props.body}</p>
      </div>
    </div>
  );

export default Tabs;
