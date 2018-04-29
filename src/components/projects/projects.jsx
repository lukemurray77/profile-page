import React from 'react';
import Card from '../card/card';
import ncnews1 from '../images/ncnews1.png';
import alexaspits from '../images/alexaspits.png';
import lowbar from '../images/lowbar.png';

import './projects.css';

const Projects = () =>
  (
    <div className="container project-container">
      <div className="text-center">
        <h2 className="projects-title">PROJECTS</h2>
        <hr className="double-divider divider-white" />
      </div>
      <div className="row col-md-11 m-auto projects-list">
        <div className="col-md-6">
          <Card image={alexaspits} title="ALEXA SPITS BARS" description="Built using AWS, the alexa rap battle bot gives users the oppurtunity to have a rap battle with Alexa, where the rap generated is responsive to what the user says. We built up a library of lyrics, and built a rhyming algorithm to choose raps from 100s of artists. Each rap is posted on twitter" />
          <Card image={ncnews1} title="NORTHCODERS NEWS" description="End-to-end application which is a clone of reddit. Created a restful API using express and mongoDB, hosted with mlabs and heroku. The front end is built with react and redux, styled using bulma." />
        </div>
        <div className="col-md-6">
          <Card image={lowbar} title="LOWBAR.JS" description="My reimplementation of the Underscore.js library. Made using Test Driven Development practices with Chai and Mocha." />
        </div>
      </div>
    </div>
  );

export default Projects;
