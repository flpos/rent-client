import {
  ConfirmReservationUseCase,
  ConfirmReservationUseCaseInput,
} from '../../../domain/use-cases/confirm-reservation.usecase';

export class ConfirmReservationMockUseCase
  implements ConfirmReservationUseCase
{
  async run(payload: ConfirmReservationUseCaseInput): Promise<null> {
    return null;
  }
}
