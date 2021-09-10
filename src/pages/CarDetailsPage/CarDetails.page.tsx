import React, { FormEventHandler } from 'react';
import { useParams } from 'react-router';
import Input from '../../components/input';
import { CarDetail } from '../../domain/entities/car.entity';
import { ConfirmReservationUseCase } from '../../domain/use-cases/confirm-reservation.usecase';
import { GetCarDetailsUseCase } from '../../domain/use-cases/get-car-details.usecase';
import { UserPersistenceService } from '../../infra/services/user-persistence.service';

type Props = {
  getCarDetailsUseCase: GetCarDetailsUseCase;
  confirmReservationUseCase: ConfirmReservationUseCase;
  userPersistenceService: UserPersistenceService;
};

type ParamProps = {
  id: string;
};

const CarDetailsPage: React.FC<Props> = ({
  getCarDetailsUseCase,
  confirmReservationUseCase,
  userPersistenceService,
}) => {
  const [car, setCar] = React.useState<CarDetail>();
  const [isLoading, setIsLoading] = React.useState(false);

  const [start, setStart] = React.useState(new Date());
  const [end, setEnd] = React.useState(new Date());

  const { id } = useParams<ParamProps>();

  React.useEffect(() => {
    setIsLoading(true);
    getCarDetailsUseCase
      .run(id)
      .then((car) => {
        if (car) {
          setCar(car);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [getCarDetailsUseCase, id]);

  const handleConfirmReservation: FormEventHandler = (event) => {
    event.preventDefault();
    const user = userPersistenceService.get();
    confirmReservationUseCase.run({
      carId: car!.id,
      userId: user!.id,
      start,
      end,
    });
  };

  if (isLoading) return <div title='loading' />;
  if (!car) return <div>Car Not Found</div>;
  const { brand, color, imageUrl, kilometers, model, year } = car;
  return (
    <>
      <div>
        <img src={imageUrl} alt={`${year} ${brand} ${model} car`} />
        <ul>
          <li>
            Brand:
            <span>{brand}</span>
          </li>
          <li>
            Model: <span>{model}</span>
          </li>
          <li>
            Year: <span>{year}</span>
          </li>
          <li>
            Color: <span>{color}</span>
          </li>
          <li>
            KM: <span>{kilometers}</span>
          </li>
        </ul>
      </div>
      <form onSubmit={handleConfirmReservation}>
        <h2>Reservation</h2>
        <label htmlFor='start-date'>Initial Date</label>
        <Input
          type='date'
          id='start-date'
          onChange={(value) => setStart(new Date(value))}
        />
        <label htmlFor='end-date'>End Date</label>
        <Input
          type='date'
          id='end-date'
          onChange={(value) => setEnd(new Date(value))}
        />
        <Input type='submit' value='Confirm reservation' />
      </form>
    </>
  );
};

export default CarDetailsPage;
