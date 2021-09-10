import React from 'react';
import { Car } from '../../domain/entities/car.entity';
import CarCard from '../car-card';

type Props = {
  cars?: Car[];
  isLoading?: boolean;
};

const CarContainer: React.FC<Props> = ({ cars = [], isLoading = false }) => {
  if (isLoading) return <div title='loading' />;
  if (cars.length === 0) return <div>No car found</div>;
  return (
    <>
      {cars.map((car) => (
        <CarCard
          key={car.id}
          brand={car.brand}
          id={car.id}
          imageUrl={car.imageUrl}
          model={car.model}
          year={car.year}
        />
      ))}
    </>
  );
};

export default CarContainer;
