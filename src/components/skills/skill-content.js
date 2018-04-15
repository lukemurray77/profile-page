import React, { Component } from 'react';
import FrontEndTab from './front-end-tab';
import BackEndTab from './back-end-tab';
import DevOps from './devops-tab';

import reactLogo from '../images/react.png';
import reduxLogo from '../images/reduxLogo.png';
import bootstrapLogo from '../images/bootstrapLogo.png';
import cssLogo from '../images/cssLogo.png';
import sassLogo from '../images/sassLogo.png';
import htmlLogo from '../images/htmlLogo.png';
import jsLogo from '../images/javascript.png';
import aws from '../images/aws.png';
import apiGateway from '../images/api-gateway.png';
import docker from '../images/docker.png';
import dynamodb from '../images/dynamodb.png';
import ec2 from '../images/ec2.png';
import git from '../images/git.png';
import lambda from '../images/lambda.png';
import postgresql from '../images/postgresql.png';
import serverless from '../images/serverless.png';
import nodejs from '../images/nodejs.png';
import redshift from '../images/redshift.png';
import restapi from '../images/restapi.png';
import cloudwatch from '../images/cloudwatch.png';
import jira from '../images/jira.png';
import s3 from '../images/s3.png';

class SkillContent extends Component {

    render() {
        return (
          <div className="tab-content tab-space">
            <FrontEndTab
            images={{
              reactLogo,
              reduxLogo,
              bootstrapLogo,
              cssLogo,
              sassLogo,
              htmlLogo,
              jsLogo
            }}/>
            <BackEndTab
            images={{
              nodejs,
              dynamodb,
              apiGateway,
              lambda,
              postgresql,
              serverless,
              restapi,
              redshift
            }}/>
            <DevOps
            images={{
              docker,
              aws,
              ec2,
              cloudwatch,
              git,
              jira,
              s3
            }}/>
          </div>
        );
    }
}

export default SkillContent;
