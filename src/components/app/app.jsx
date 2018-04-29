import React from 'react';
import Navbar from '../navbar/navbar';

const App = props =>
  (
    <div className="profile-page">
      <Navbar />
      {props.children}
    </div>
  );

export default App;
