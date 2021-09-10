import { CarDetail } from '../../../domain/entities/car.entity';
import { GetCarDetailsUseCase } from '../../../domain/use-cases/get-car-details.usecase';

export class GetCarDetailsMockUseCase implements GetCarDetailsUseCase {
  async run(id: string): Promise<CarDetail> {
    return {
      id,
      brand: 'Ford',
      model: 'Ka',
      color: 'black',
      imageUrl: 'https://google.com/some-image.jpg',
      kilometers: 200,
      year: 2020,
    };
  }
}
