import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Button from './Button';

describe('button component', () => {
  it('is defined', () => {
    expect(Button).toBeDefined();
  });
  it('calls onClick fn', () => {
    const onClickMock = jest.fn();
    const screen = render(<Button onClick={onClickMock}>button</Button>);
    const button = screen.getByText('button');

    act(() => {
      fireEvent.click(button);
    });

    expect(onClickMock).toBeCalled();
  });
});
