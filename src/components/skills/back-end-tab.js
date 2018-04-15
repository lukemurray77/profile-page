import React, { Component } from 'react';

class BackEndTab extends Component {

    render() {
        return (
            <div className="tab-pane text-center gallery" id="backend">
              <div className="row col-md-9 m-auto">
                <div className="col-md-2 m-auto">
                  <img src={this.props.images.lambda} className="rounded lambda-image"/>
                  <img src={this.props.images.nodejs} className="rounded nodejs-image"/>
                </div>
                <div className="col-md-2 m-auto">
                  <img src={this.props.images.dynamodb} className="rounded dynamodb-image"/>
                  <img src={this.props.images.serverless} className="rounded serverless-image"/>
                </div>
                <div className="col-md-2 m-auto">
                  <img src={this.props.images.apiGateway} className="rounded apiGateway-image"/>
                  <img src={this.props.images.postgresql} className="rounded postgresql-image"/>
                </div>
                <div className="col-md-2 m-auto">
                  <img src={this.props.images.redshift} className="rounded redshift-image"/>
                  <img src={this.props.images.restapi} className="rounded restapi-image"/>
                </div>
              </div>
            </div>
        );
    }
}

export default BackEndTab;
