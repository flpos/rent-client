import React from 'react';
import CarContainer from '../../components/car-container';
import { Car } from '../../domain/entities/car.entity';
import { GetCarListUseCase } from '../../domain/use-cases/get-car-list.usecase';

type Props = {
  getCarListUseCase: GetCarListUseCase;
};

const CarListPage: React.FC<Props> = ({ getCarListUseCase }) => {
  const [cars, setCars] = React.useState<Array<Car>>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>();

  React.useEffect(() => {
    setIsLoading(true);
    getCarListUseCase
      .run()
      .then(({ cars }) => {
        if (cars.length > 0) {
          setCars(cars);
        }
      })
      .finally(() => setIsLoading(false));
  }, [getCarListUseCase]);

  return (
    <>
      <CarContainer cars={cars} isLoading={isLoading} />
    </>
  );
};

export default CarListPage;
