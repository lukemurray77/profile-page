import React from 'react';
import SkillTab from './skill-tab';
import SkillContent from './skill-content';
import './skills.css';

const Skills = () =>
  (
    <div className="row">
      <div className="text-center" style={{ width: '100%' }}>
        <h2 className="title">SKILLS</h2>
        <hr className="double-divider" />
      </div>
      <div className="col-md-12 ml-auto mr-auto">
        <SkillTab />
        <SkillContent />
      </div>
    </div>
  );

export default Skills;
