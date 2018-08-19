import React from 'react';
import './header.css';

const Header = props =>
  (
    <div className="page-header header-filter" data-parallax="true" style={{ backgroundImage: `url(${props.bkgImage})`, height: `${props.height}` }} >
      <h2 className="title">{props.title}</h2>
    </div>
  );

export default Header;
