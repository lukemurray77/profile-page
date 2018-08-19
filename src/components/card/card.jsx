import React from 'react';
import './card.css';

const Card = (props) => {
  const className = props.customImg ? `card-img-top ${props.customImg}` : 'card-img-top';
  return (
    <div className="card">
      <img className={className} src={props.image} alt="Sorry, failed to load" />
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.description}</p>
        <a href={props.url} className="card-button btn btn-primary" target="_blank" rel="noopener noreferrer">Check it out!</a>
      </div>
    </div>
  );
};

export default Card;
