import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Input from '.';

describe('input component', () => {
  it('is defined', () => {
    expect(Input).toBeDefined();
  });
  it('calls back with value on change', () => {
    const onChangeMock = jest.fn();
    const screen = render(
      <Input onChange={onChangeMock} data-testid='input-test' />
    );
    const input = screen.getByTestId('input-test');

    act(() => {
      fireEvent.change(input, { target: { value: 'abc' } });
    });

    expect(onChangeMock).toBeCalledWith('abc');
  });
});
