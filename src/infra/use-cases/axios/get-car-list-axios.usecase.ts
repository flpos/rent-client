import { Car } from '../../../domain/entities/car.entity';
import {
  GetCarListUseCase,
  GetCarListUseCaseOutput,
} from '../../../domain/use-cases/get-car-list.usecase';
import axiosInstance from '../../services/axios.service';

export class GetCarListAxiosUseCase implements GetCarListUseCase {
  async run(): Promise<GetCarListUseCaseOutput> {
    const { data } = await axiosInstance.get<Array<Car>>('/car');

    return { cars: data };
  }
}
