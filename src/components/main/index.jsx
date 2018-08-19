import React from 'react';
import ProfilePic from '../profile-pic';
import Skills from '../skills/skills-main';
import Projects from '../projects/projects';
import Contact from '../contact/contact';
import './main.css';

const Main = () =>
  (
    <div className="main main-raised">
      <div className="profile-content">
        <div className="profile-pic-buttons">
          <ProfilePic />
          <p className="small-p">Highly motivated full-stack Javascript engineer. I have worked on complex and interesting projects using a varied tech stack. I love solving hard problems collaboratively using cutting edge technologies.</p>
        </div>
        <div className="route-to-skills" id="skills" />
        <div className="skills-div">
          <Skills />
        </div>
        <div className="route-to-projects" id="projects" />
        <div className="projects-div">
          <Projects />
        </div>
        <div className="contact-me">
          <Contact />
        </div>
      </div>
    </div>
  );

export default Main;
