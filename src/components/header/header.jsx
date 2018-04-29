import React from 'react';
import bkgImage from '../images/background-image.png';
import './header.css';

const Header = () =>
  (
    <div className="page-header header-filter" data-parallax="true" style={{ backgroundImage: `url(${bkgImage})` }} />
  );

export default Header;
