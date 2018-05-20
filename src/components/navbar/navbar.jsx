import React from 'react';
import './navbar.css';

const Navbar = () =>
  (
    <nav className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg" color-on-scroll="100" id="sectionsNav">
      <div className="container">
        <div className="navbar-translate">
          <button className="navbar-toggler move-to-the-right" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="dropdown nav-item">
              <a href="null" className="dropdown-toggle nav-link" data-toggle="dropdown">
                <i className="material-icons">apps</i> Projects
              </a>
              <div className="dropdown-menu dropdown-with-icons">
                <a href="https://twitter.com/alexaSpitsBars" target="_blank" rel="noopener noreferrer" className="dropdown-item">
                  <i className="material-icons">mic</i> Alexa rap battle
                </a>
                <a href="https://northcoders-news-12345.herokuapp.com/" className="dropdown-item" target="_blank" rel="noopener noreferrer">
                  <i className="material-icons">web</i> Northcoders News
                </a>
                <a href="https://lukemurray77.github.io/LowBar/" target="_blank" rel="noopener noreferrer" className="dropdown-item">
                  <i className="material-icons">code</i> Lowbar
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" rel="tooltip noopener noreferrer" title="" data-placement="bottom" href="https://github.com/lukemurray77" target="_blank" data-original-title="See my work on Github!">
                <i className="fa fa-github" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" rel="tooltip noopener noreferrer" title="" data-placement="bottom" href="https://www.facebook.com/luke.murray.585?ref=bookmarks" target="_blank" data-original-title="Find me on Facebook">
                <i className="fa fa-facebook-square" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" rel="tooltip noopener noreferrer" title="" data-placement="bottom" href="https://www.facebook.com/luke.murray.585?ref=bookmarks" target="_blank" data-original-title="Find me on LinkedIn">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

export default Navbar;
