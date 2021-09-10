import { render } from '@testing-library/react';
import CarDetailsPage from '.';
import { GetCarDetailsUseCase } from '../../domain/use-cases/get-car-details.usecase';
import { GetCarDetailsMockUseCase } from '../../infra/use-cases/mock/get-car-details-mock.usecase';
import { MemoryRouter, Route } from 'react-router-dom';
import { ConfirmReservationUseCase } from '../../domain/use-cases/confirm-reservation.usecase';
import { ConfirmReservationMockUseCase } from '../../infra/use-cases/mock/confirm-reservation-mock.usecase';
import { act } from 'react-dom/test-utils';
import { UserPersistenceService } from '../../infra/services/user-persistence.service';

let getCarDetailsUseCase: GetCarDetailsUseCase;
let confirmReservationUseCase: ConfirmReservationUseCase;
let userPersistenceService: UserPersistenceService;

beforeEach(() => {
  getCarDetailsUseCase = new GetCarDetailsMockUseCase();
  confirmReservationUseCase = new ConfirmReservationMockUseCase();
  userPersistenceService = new UserPersistenceService();
});

describe('Car details page', () => {
  it('is defined', () => {
    expect(CarDetailsPage).toBeDefined();
  });

  it('calls the fn to get the details', () => {
    jest
      .spyOn(getCarDetailsUseCase, 'run')
      .mockReturnValueOnce(new Promise(() => undefined));

    render(
      <MemoryRouter initialEntries={['car/1abs']}>
        <Route path='car/:id'>
          <CarDetailsPage
            getCarDetailsUseCase={getCarDetailsUseCase}
            confirmReservationUseCase={confirmReservationUseCase}
            userPersistenceService={userPersistenceService}
          />
        </Route>
      </MemoryRouter>
    );

    expect(getCarDetailsUseCase.run).toBeCalledWith('1abs');
  });

  it('has inputs for the reservation dates', async () => {
    const screen = render(
      <MemoryRouter initialEntries={['car/1abs']}>
        <Route path='car/:id'>
          <CarDetailsPage
            getCarDetailsUseCase={getCarDetailsUseCase}
            confirmReservationUseCase={confirmReservationUseCase}
            userPersistenceService={userPersistenceService}
          />
        </Route>
      </MemoryRouter>
    );

    const startInput = await screen.findByLabelText(/initial date/i);
    const endInput = await screen.findByLabelText(/end date/i);

    expect(startInput).toBeInTheDocument();
    expect(endInput).toBeInTheDocument();
  });

  it('has a button for confirm the reservation', async () => {
    const screen = render(
      <MemoryRouter initialEntries={['car/1abs']}>
        <Route path='car/:id'>
          <CarDetailsPage
            getCarDetailsUseCase={getCarDetailsUseCase}
            confirmReservationUseCase={confirmReservationUseCase}
            userPersistenceService={userPersistenceService}
          />
        </Route>
      </MemoryRouter>
    );

    const submitButton = await screen.findByText(/confirm reservation/i);

    expect(submitButton).toBeInTheDocument();
  });

  it('calls the confirm reservation fn', async () => {
    const spy = jest.spyOn(confirmReservationUseCase, 'run');
    userPersistenceService.get = jest.fn(() => ({
      id: 'abc',
      email: 'abc',
      username: 'abc',
    }));

    const screen = render(
      <MemoryRouter initialEntries={['car/1abs']}>
        <Route path='car/:id'>
          <CarDetailsPage
            getCarDetailsUseCase={getCarDetailsUseCase}
            confirmReservationUseCase={confirmReservationUseCase}
            userPersistenceService={userPersistenceService}
          />
        </Route>
      </MemoryRouter>
    );

    const submitButton = await screen.findByText(/confirm reservation/i);

    act(() => {
      submitButton.click();
    });

    expect(confirmReservationUseCase.run).toBeCalled();
    const [[calledWith]] = spy.mock.calls;
    expect(calledWith.carId).toBe('1abs');
    expect(calledWith.start).toBeInstanceOf(Date);
    expect(calledWith.end).toBeInstanceOf(Date);
  });
});
