import React from 'react';

const BackEndTab = props =>
  (
    <div className="tab-pane text-center gallery" id="backend">
      <div className="row col-md-9 m-auto">
        <div className="col-md-2 m-auto">
          <img src={props.images.lambda} className="rounded lambda-image" alt="" />
          <img src={props.images.nodejs} className="rounded nodejs-image" alt="" />
        </div>
        <div className="col-md-2 m-auto">
          <img src={props.images.dynamodb} className="rounded dynamodb-image" alt="" />
          <img src={props.images.serverless} className="rounded serverless-image" alt="" />
        </div>
        <div className="col-md-2 m-auto">
          <img src={props.images.apiGateway} className="rounded apiGateway-image" alt="" />
          <img src={props.images.postgresql} className="rounded postgresql-image" alt="" />
        </div>
        <div className="col-md-2 m-auto">
          <img src={props.images.redshift} className="rounded redshift-image" alt="" />
          <img src={props.images.restapi} className="rounded restapi-image" alt="" />
        </div>
      </div>
    </div>
  );

export default BackEndTab;
