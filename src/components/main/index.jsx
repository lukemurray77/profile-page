import React from 'react';
import ProfilePic from '../profile-pic';
import Skills from '../skills/skills-main';
import Projects from '../projects/projects';
import Divider from '../divider/divider';
import Contact from '../contact/contact';
import './main.css';

const Main = () =>
  (
    <div className="main main-raised">
      <div className="profile-content">
        <div className="profile-pic-buttons">
          <ProfilePic />
          <p className="small-p">Highly motivated full-stack Javascript engineer. I have worked on complex and interesting projects using a varied tech stack. I love solving hard problems collaboratively using cutting edge technologies.</p>
          <div className="button-navs row col-md-5">
            <div className="skills button-container col-md-4"><a href="#skills"><button type="button" className="btn btn-primary">SKILLS</button></a></div>
            <div className="projects button-container col-md-4"><a href="#projects"><button type="button" className="btn btn-primary">PROJECTS</button></a></div>
            <div className="contact button-container col-md-4"><a href="#contact"><button type="button" className="btn btn-primary">CONTACT</button></a></div>
          </div>
        </div>
        <Divider color="purple" />
        <div className="route-to-skills" id="skills" />
        <div className="skills-div">
          <Skills />
        </div>
        <Divider color="white" />
        <div className="route-to-projects" id="projects" />
        <div className="projects-div">
          <Projects />
        </div>
        <Divider color="pink" />
        <div className="contact-me">
          <Contact />
        </div>
      </div>
    </div>
  );

export default Main;
