import { render } from '@testing-library/react';
import CarContainer from '.';

const inputData = [
  {
    id: 'some-id-1',
    brand: 'Ford',
    model: 'Ka',
    year: 2018,
    imageUrl: 'some-url-1',
  },
  {
    id: 'some-id-2',
    brand: 'Ford',
    model: 'Ka',
    year: 2018,
    imageUrl: 'some-url-2',
  },
];

describe('car container component', () => {
  it('is defined', () => {
    expect(CarContainer).toBeDefined();
  });
  it('renders a list of cars', () => {
    const screen = render(<CarContainer cars={inputData} />);
    const carImages = screen.getAllByTitle(/car/);

    expect(carImages.length).toBe(inputData.length);
  });
  it('shows a element when loading', () => {
    const screen = render(<CarContainer isLoading={true} />);
    const element = screen.getByTitle('loading');

    expect(element).toBeInTheDocument();
  });
  it('shows a message if no car is found', () => {
    const screen = render(<CarContainer />);
    const message = screen.getByText(/no car/i);

    expect(message).toBeInTheDocument();
  });
});
