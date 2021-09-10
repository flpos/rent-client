import React from 'react';
import './App.css';
import { UserPersistenceService } from './infra/services/user-persistence.service';
import { ConfirmReservationAxiosUseCase } from './infra/use-cases/axios/confirm-reservation-axios.usecase';
import { GetCarDetailsAxiosUseCase } from './infra/use-cases/axios/get-car-details-axios.usecase';
import { GetCarListAxiosUseCase } from './infra/use-cases/axios/get-car-list-axios.usecase';
import { LoginAxiosUseCase } from './infra/use-cases/axios/login-axios.usecase';
import Routes from './routes';

const confirmReservationUseCase = new ConfirmReservationAxiosUseCase();
const getCarDetailsUseCase = new GetCarDetailsAxiosUseCase();
const getCarListUseCase = new GetCarListAxiosUseCase();
const loginUseCase = new LoginAxiosUseCase();
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
