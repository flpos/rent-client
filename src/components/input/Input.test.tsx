import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Input from '.';

describe('input component', () => {
  it('is defined', () => {
    expect(Input).toBeDefined();
  });
  it('calls back with value on change', () => {
    const onChangeMock = jest.fn();
    const screen = render(
      <Input onChange={onChangeMock} dataTestid='input-test' />
    );
    const input = screen.getByTestId('input-test');

    act(() => {
      userEvent.type(input, 'abc');
    });

    expect(onChangeMock).toBeCalledWith('abc');
  });
});
