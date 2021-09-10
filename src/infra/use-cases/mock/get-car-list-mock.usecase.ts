import {
  GetCarListUseCase,
  GetCarListUseCaseOutput,
} from '../../../domain/use-cases/get-car-list.usecase';

export class GetCarListMockUseCase implements GetCarListUseCase {
  async run(): Promise<GetCarListUseCaseOutput> {
    return {
      cars: [
        {
          id: 'car-1',
          brand: 'Ford',
          model: 'Ka',
          imageUrl: 'https://google.com/some-image.jpg',
          year: 2020,
        },
        {
          id: 'car-2',
          brand: 'Chevrolet',
          model: 'Onix',
          imageUrl: 'https://google.com/some-image.jpg',
          year: 2019,
        },
      ],
    };
  }
}
