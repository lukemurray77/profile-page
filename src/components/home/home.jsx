import React from 'react';
import Header from '../header/header';
import Main from '../main/index';
import bkgImage from '../images/background-image.png';

const Home = () =>
  (
    <div className="Home">
      <Header bkgImage={bkgImage} height="50vh" />
      <Main />
    </div>
  );

export default Home;
