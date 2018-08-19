import React from 'react';
import Card from '../card/card';
import ncnews1 from '../images/ncnews1.png';
import alexaspits from '../images/alexaspits.png';
import lowbar from '../images/lowbar.png';
import peak from '../images/logo-black.png';
import hs from '../images/headswap.png';

import './projects.css';

const Projects = () =>
  (
    <div className="container project-container">
      <div className="text-center">
        <h2 className="projects-title">Some things I have worked on</h2>
      </div>
      <div className="row col-md-11 m-auto projects-list">
        <div className="col-md-6">
          <Card url="https://peak.ai" customImg="peakimg" image={peak} title="Peak AI" description="At my current role at Peak I have worked on many interesting and varied projects using a wide range of technologies. I work accross the full stack and am a key member of the team solving complex engineering problems." />
          <Card url="https://northcoders-news-12345.herokuapp.com/" image={ncnews1} title="NORTHCODERS NEWS" description="End-to-end application which is a clone of reddit. Created a restful API using express and mongoDB, hosted with mlabs and heroku. The front end is built with react and redux, styled using bulma." />
          <Card url="https://headswap.com" image={hs} title="Headswap" description="Worked as a front-end developer on this project, a start up based on switzerland focused on the informal education market." />
        </div>
        <div className="col-md-6">
          <Card url="https://twitter.com/alexaSpitsBars" image={alexaspits} title="ALEXA SPITS BARS" description="Built using AWS, the alexa rap battle bot gives users the oppurtunity to have a rap battle with Alexa, where the rap generated is responsive to what the user says. We built up a library of lyrics, and built a rhyming algorithm to choose raps from 100s of artists. Each rap is posted on twitter" />
          <Card url="https://lukemurray77.github.io/LowBar/" image={lowbar} title="LOWBAR.JS" description="My reimplementation of the Underscore.js library. Made using Test Driven Development practices with Chai and Mocha." />
        </div>
      </div>
    </div>
  );

export default Projects;
