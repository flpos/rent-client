/* istanbul ignore file */
import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { ConfirmReservationUseCase } from '../domain/use-cases/confirm-reservation.usecase';
import { GetCarDetailsUseCase } from '../domain/use-cases/get-car-details.usecase';
import { GetCarListUseCase } from '../domain/use-cases/get-car-list.usecase';
import { LoginUseCase } from '../domain/use-cases/login.usecase';
import { UserPersistenceService } from '../infra/services/user-persistence.service';
import CarDetailsPage from '../pages/CarDetailsPage';
import CarListPage from '../pages/CarListPage';
import LoginPage from '../pages/login';
import history from '../infra/services/history.service';
import Header from '../components/header';

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
  const isLogged = React.useCallback(
    () => !!userPersistenceService.get(),
    [userPersistenceService]
  );
  return (
    <Router history={history}>
      <Switch>
        <Route
          path='/'
          exact
          render={() => {
            if (isLogged()) {
              return <Redirect to='/car' />;
            } else {
              return <Redirect to='/login' />;
            }
          }}
        />
        <Route
          path='/login'
          render={() => (
            <LoginPage
              loginUseCase={loginUseCase}
              userPersistenceService={userPersistenceService}
              history={history}
            />
          )}
        />
        <Route
          path='/car'
          render={() => (
            <>
              <Header
                history={history}
                userPersistenceService={userPersistenceService}
              />
              <CarListPage getCarListUseCase={getCarListUseCase} />
            </>
          )}
          exact
        />
        <Route
          path='/car/:id'
          render={() => (
            <>
              <Header
                history={history}
                userPersistenceService={userPersistenceService}
              />
              <CarDetailsPage
                confirmReservationUseCase={confirmReservationUseCase}
                getCarDetailsUseCase={getCarDetailsUseCase}
                userPersistenceService={userPersistenceService}
              />
            </>
          )}
        />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default Routes;
