import React from 'react';

type Props = {
  id: string;
  brand: string;
  model: string;
  year: number;
  imageUrl: string;
};

const Card: React.FC<Props> = ({ id, brand, model, year, imageUrl }) => {
  return (
    <>
      <img src={imageUrl} alt={`${year} ${brand} ${model} car`} />
      <ul>
        <li>
          Brand: <span>{brand}</span>
        </li>
        <li>
          Model: <span>{model}</span>
        </li>
        <li>
          Year: <span>{year}</span>
        </li>
      </ul>
      <a href={`car/${id}`}>Details</a>
    </>
  );
};

export default Card;
