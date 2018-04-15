import React, { Component } from 'react';
import SkillTab from './skill-tab';
import SkillContent from './skill-content';
import './skills.css';

class Skills extends Component {

    render() {
        return (
          <div class="row">
            <div class="col-md-12 ml-auto mr-auto">
              <SkillTab />
              <SkillContent />
            </div>
          </div>
        );
    }
}

export default Skills;
