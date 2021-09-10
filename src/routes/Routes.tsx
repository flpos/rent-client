import React from 'react';
import { Router, Route } from 'react-router-dom';
import { ConfirmReservationUseCase } from '../domain/use-cases/confirm-reservation.usecase';
import { GetCarDetailsUseCase } from '../domain/use-cases/get-car-details.usecase';
import { GetCarListUseCase } from '../domain/use-cases/get-car-list.usecase';
import { LoginUseCase } from '../domain/use-cases/login.usecase';
import { UserPersistenceService } from '../infra/services/user-persistence.service';
import CarDetailsPage from '../pages/CarDetailsPage';
import CarListPage from '../pages/CarListPage';
import LoginPage from '../pages/login';
import history from '../infra/services/history.service';

type Props = {
  loginUseCase: LoginUseCase;
  getCarListUseCase: GetCarListUseCase;
  confirmReservationUseCase: ConfirmReservationUseCase;
  getCarDetailsUseCase: GetCarDetailsUseCase;
  userPersistenceService: UserPersistenceService;
};

const Routes: React.FC<Props> = ({
  loginUseCase,
  getCarListUseCase,
  confirmReservationUseCase,
  getCarDetailsUseCase,
  userPersistenceService,
}) => {
  return (
    <Router history={history}>
      <Route
        path='/login'
        render={() => (
          <LoginPage
            loginUseCase={loginUseCase}
            userPersistenceService={userPersistenceService}
          />
        )}
      />
      <Route
        path='/car'
        render={() => <CarListPage getCarListUseCase={getCarListUseCase} />}
        exact
      />
      <Route
        path='/car/:id'
        render={() => (
          <CarDetailsPage
            confirmReservationUseCase={confirmReservationUseCase}
            getCarDetailsUseCase={getCarDetailsUseCase}
            userPersistenceService={userPersistenceService}
          />
        )}
      />
    </Router>
  );
};

export default Routes;
