import React, { Component } from 'react';
import Card from '../card';
import Contact from '../contact';
import ProfilePic from '../profile-pic';
import Skills from '../skills';
import './main.css';

class Main extends Component {

    render() {
        return (
          <div className='main main-raised'>
            <div className='profile-content'>
              <div className='container'>
                <ProfilePic />
                <p className="small-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante</p>
                <Skills />
              </div>
            </div>
          </div>
        );
    }
}

export default Main;
