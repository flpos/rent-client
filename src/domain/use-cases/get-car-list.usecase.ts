import { Car } from '../entities/car.entity';

export type GetCarListUseCaseOutput = {
  cars: Array<Car>;
};

export interface GetCarListUseCase {
  run(): Promise<GetCarListUseCaseOutput>;
}
