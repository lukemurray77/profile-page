import React, { Component } from 'react';
import './skills.css';

class FrontEndTab extends Component {

    render() {
        return (
            <div className="tab-pane text-center gallery" id="frontend">
              <div className="row col-md-9 m-auto">
                <div className="col-md-2 m-auto">
                  <img src={this.props.images.reactLogo} className="rounded react-image" />
                  <img src={this.props.images.reduxLogo} className="rounded redux-image" />
                </div>
                <div className="col-md-2 m-auto">
                  <img src={this.props.images.cssLogo} className="rounded css-image" />
                  <img src={this.props.images.htmlLogo} className="rounded html-image" />
                </div>
                <div className="col-md-2 m-auto">
                  <img src={this.props.images.bootstrapLogo} className="rounded bootstrap-image" />
                  <img src={this.props.images.sassLogo} className="rounded sass-image" />
                </div>
                <div className="col-md-2 m-auto">
                  <img src={this.props.images.jsLogo} className="rounded js-image" />
                </div>
              </div>
            </div>
        );
    }
}

export default FrontEndTab;
