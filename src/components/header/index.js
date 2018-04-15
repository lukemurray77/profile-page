import React, { Component } from 'react';
import bkgImage from '../images/bkg.png';
import './header.css';

class Header extends Component {

    render() {
        return (
          <div className="page-header header-filter" data-parallax="true" style={{backgroundImage: `url(${bkgImage})`}}></div>
        );
    }
}

export default Header;
