import React from 'react';

const Card = props => {
  return (
    <div className='card'>
      <h3>{props.details.title}</h3>
      <p>{props.details.explanation}</p>
      <img src={props.details.hdurl} alt='' />
      <p> {props.details.date}</p>
      <p>{props.details.copyright}</p>
    </div>
  );
};
export default Card;
