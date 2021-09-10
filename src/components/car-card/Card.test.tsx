import { render } from '@testing-library/react';
import Card from '.';

let props = {
  id: 'some-id',
  brand: 'Ford',
  model: 'Ka',
  year: 2018,
  imageUrl: 'some-url',
};
let screen: ReturnType<typeof render>;

beforeEach(() => {
  screen = render(<Card {...props} />);
});

describe('card component', () => {
  it('is defined', () => {
    expect(Card).toBeDefined();
  });
  it('must show the image of the car', () => {
    const image = screen.getByAltText(/car/);
    expect(image).toBeInTheDocument();
  });
  it('must show the brand, year and model of the car', () => {
    const brand = screen.getByText(props.brand);
    expect(brand).toBeInTheDocument();

    const model = screen.getByText(props.model);
    expect(model).toBeInTheDocument();

    const year = screen.getByText(props.year);
    expect(year).toBeInTheDocument();
  });
  it('must contain a link to the details page', () => {
    const link = screen.getByText(/details/i) as HTMLAnchorElement;
    const regex = new RegExp(props.id);
    expect(regex.test(link.href)).toBeTruthy();
  });
});
