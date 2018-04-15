import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
          <div className='col-md-4'>
            <div className='info'>
                <div className={`icon icon-${this.props.logo}`}>
                    <i className='material-icons'>{this.props.icon}</i>
                </div>
                <h4 className='info-title'>{this.props.cardTitle}</h4>
                <p>{this.props.body}</p>
            </div>
          </div>
        );
    }
}

export default Card;
