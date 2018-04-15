import React, { Component } from 'react';

class DevOps extends Component {

    render() {
        return (
            <div className="tab-pane text-center gallery" id="devops">
              <div className="row col-md-9 m-auto">
                <div className="col-md-2 m-auto">
                  <img src={this.props.images.docker} className="rounded docker-image" />
                  <img src={this.props.images.jira} className="rounded jira-image" />
                </div>
                <div className="col-md-2 m-auto">
                  <img src={this.props.images.aws} className="rounded aws-image" />
                  <img src={this.props.images.git} className="rounded git-image" />
                </div>
                <div className="col-md-2 m-auto">
                  <img src={this.props.images.s3} className="rounded s3-image" />
                  <img src={this.props.images.cloudwatch} className="rounded cloudwatch-image" />
                </div>
                <div className="col-md-2 m-auto">
                  <img src={this.props.images.ec2} className="rounded ec2-image" />
                </div>
              </div>
            </div>
        );
    }
}

export default DevOps;
