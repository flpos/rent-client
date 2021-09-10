import { CarDetail } from '../entities/car.entity';

export interface GetCarDetailsUseCase {
  run(id: string): Promise<CarDetail>;
}
