import React from 'react';
import './card.css';
import cardEgImage from '../images/aws.png';

const Card = props =>
  (
    <div className="card">
      <img className="card-img-top" src={props.image || cardEgImage} alt="Sorry, failed to load" />
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.description}</p>
        <a href={props.url} className="card-button btn btn-primary" target="_blank" rel="noopener noreferrer">Check it out!</a>
      </div>
    </div>
  );

export default Card;
