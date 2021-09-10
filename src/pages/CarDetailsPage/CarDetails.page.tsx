import { Container, Box, Typography, List, ListItem } from '@material-ui/core';
import React, { FormEventHandler } from 'react';
import { useParams } from 'react-router';
import Input from '../../components/input';
import Button from '../../components/button';
import { CarDetail } from '../../domain/entities/car.entity';
import { ConfirmReservationUseCase } from '../../domain/use-cases/confirm-reservation.usecase';
import { GetCarDetailsUseCase } from '../../domain/use-cases/get-car-details.usecase';
import { UserPersistenceService } from '../../infra/services/user-persistence.service';
import useStyles from './styles';

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

  const styles = useStyles();

  if (isLoading) return <div title='loading' />;
  if (!car) return <div>Car Not Found</div>;
  const { brand, color, imageUrl, kilometers, model, year } = car;
  return (
    <Container maxWidth='md' className={styles.root}>
      <Box className={styles.row}>
        <img
          className={styles.image}
          src={imageUrl}
          alt={`${year} ${brand} ${model} car`}
        />
        <List className={styles.list}>
          <Typography variant='h4'>Details</Typography>
          <ListItem className={styles.listItem} divider>
            Brand
            <span>{brand}</span>
          </ListItem>
          <ListItem className={styles.listItem} divider>
            Model <span>{model}</span>
          </ListItem>
          <ListItem className={styles.listItem} divider>
            Year <span>{year}</span>
          </ListItem>
          <ListItem className={styles.listItem} divider>
            Color <span>{color}</span>
          </ListItem>
          <ListItem className={styles.listItem}>
            KM <span>{kilometers}</span>
          </ListItem>
        </List>
      </Box>
      <form className={styles.reservation} onSubmit={handleConfirmReservation}>
        <Typography variant='h5'>Reservation</Typography>
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
        <Button type='submit' color='primary'>
          Confirm reservation
        </Button>
      </form>
    </Container>
  );
};

export default CarDetailsPage;
