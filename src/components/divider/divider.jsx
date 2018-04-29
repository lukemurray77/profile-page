import React from 'react';
import './divider.css';

const Divider = props =>
  (
    <div className="divider-container m-auto text-center">
      <div className={`triangle triangle-${props.color}`} />
      <div className={`triangle triangle-${props.color}`} />
      <div className={`triangle triangle-${props.color}`} />
      <div className={`triangle triangle-${props.color}`} />
      <div className={`triangle triangle-${props.color}`} />
      <div className={`triangle triangle-${props.color}`} />
    </div>
  );

export default Divider;
