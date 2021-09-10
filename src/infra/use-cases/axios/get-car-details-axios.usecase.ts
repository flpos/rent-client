import { CarDetail } from '../../../domain/entities/car.entity';
import { GetCarDetailsUseCase } from '../../../domain/use-cases/get-car-details.usecase';
import axiosInstance from '../../services/axios.service';

export class GetCarDetailsAxiosUseCase implements GetCarDetailsUseCase {
  async run(id: string): Promise<CarDetail> {
    const { data } = await axiosInstance.get<CarDetail>(`/car/${id}`);
    return data;
  }
}
