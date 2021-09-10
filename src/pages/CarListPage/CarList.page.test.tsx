import { render } from '@testing-library/react';
import CarListPage from '.';
import { GetCarListUseCase } from '../../domain/use-cases/get-car-list.usecase';
import { GetCarListMockUseCase } from '../../infra/use-cases/mock/get-car-list-mock.usecase';

let useCase: GetCarListUseCase;
let screen: ReturnType<typeof render>;

beforeEach(() => {
  useCase = new GetCarListMockUseCase();
});

describe('CarList page', () => {
  it('is defined', () => {
    expect(CarListPage).toBeDefined();
  });
  it('calls the usecase fn', async () => {
    jest
      .spyOn(useCase, 'run')
      .mockReturnValueOnce(new Promise(() => ({ cars: [] })));
    render(<CarListPage getCarListUseCase={useCase} />);
    expect(useCase.run).toBeCalled();
  });
  it('renders the car container component', async () => {
    screen = render(<CarListPage getCarListUseCase={useCase} />);
    const elements = await screen.findAllByAltText(/car/i);

    expect(elements.length).toBe(2);
  });
});
