import {
  ConfirmReservationUseCase,
  ConfirmReservationUseCaseInput,
} from '../../../domain/use-cases/confirm-reservation.usecase';
import axiosInstance from '../../services/axios.service';

export class ConfirmReservationAxiosUseCase
  implements ConfirmReservationUseCase
{
  async run(payload: ConfirmReservationUseCaseInput): Promise<null> {
    await axiosInstance.post('/confirm-reservation', payload);
    return null;
  }
}
