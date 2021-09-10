import React from 'react';
import './App.css';
import { UserPersistenceService } from './infra/services/user-persistence.service';
import { ConfirmReservationMockUseCase } from './infra/use-cases/mock/confirm-reservation-mock.usecase';
import { GetCarDetailsMockUseCase } from './infra/use-cases/mock/get-car-details-mock.usecase';
import { GetCarListMockUseCase } from './infra/use-cases/mock/get-car-list-mock.usecase';
import { LoginMockUseCase } from './infra/use-cases/mock/login-mock.usecase';
import Routes from './routes';

const confirmReservationUseCase = new ConfirmReservationMockUseCase();
const getCarDetailsUseCase = new GetCarDetailsMockUseCase();
const getCarListUseCase = new GetCarListMockUseCase();
const loginUseCase = new LoginMockUseCase();
const userPersistenceService = new UserPersistenceService();

function App() {
  return (
    <div className='App'>
      <Routes
        confirmReservationUseCase={confirmReservationUseCase}
        getCarDetailsUseCase={getCarDetailsUseCase}
        getCarListUseCase={getCarListUseCase}
        loginUseCase={loginUseCase}
        userPersistenceService={userPersistenceService}
      />
    </div>
  );
}

export default App;
