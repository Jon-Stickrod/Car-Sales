import React from 'react';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.cars.image} alt={props.cars.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

export default Header;
