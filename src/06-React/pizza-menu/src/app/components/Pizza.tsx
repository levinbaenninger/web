import React from 'react';

interface Pizza {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}

type PizzaProps = {
  pizza: Pizza;
};

const Pizza = ({ pizza }: PizzaProps) => {
  return (
    <li className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? 'Sold out' : `$${pizza.price}`}</span>
      </div>
    </li>
  );
};

export default Pizza;
