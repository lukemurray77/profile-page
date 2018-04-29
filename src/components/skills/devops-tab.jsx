import React from 'react';

const DevOps = props =>
  (
    <div className="tab-pane text-center gallery" id="devops">
      <div className="row col-md-9 m-auto">
        <div className="col-md-2 m-auto">
          <img src={props.images.docker} className="rounded docker-image" alt="" />
          <img src={props.images.jira} className="rounded jira-image" alt="" />
        </div>
        <div className="col-md-2 m-auto">
          <img src={props.images.aws} className="rounded aws-image" alt="" />
          <img src={props.images.git} className="rounded git-image" alt="" />
        </div>
        <div className="col-md-2 m-auto">
          <img src={props.images.s3} className="rounded s3-image" alt="" />
          <img src={props.images.cloudwatch} className="rounded cloudwatch-image" alt="" />
        </div>
        <div className="col-md-2 m-auto">
          <img src={props.images.ec2} className="rounded ec2-image" alt="" />
        </div>
      </div>
    </div>
  );

export default DevOps;
