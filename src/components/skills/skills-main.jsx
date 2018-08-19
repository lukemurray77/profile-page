import React from 'react';
import SkillTab from './skill-tab';
import SkillContent from './skill-content';
import './skills.css';

const Skills = () =>
  (
    <div className="row">
      <div className="col-md-12 ml-auto mr-auto">
        <SkillTab />
        <SkillContent />
      </div>
    </div>
  );

export default Skills;
