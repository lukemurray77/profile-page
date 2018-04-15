import React, { Component } from 'react';
import Navbar from '../navbar';

class App extends Component {

    render() {
        return (
          <div className = "profile-page">
            <Navbar />
            {this.props.children}
          </div>
        );
    }
}

export default App;
