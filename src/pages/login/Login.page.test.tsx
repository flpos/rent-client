import { fireEvent, render } from '@testing-library/react';
import { History } from 'history';
import { act } from 'react-dom/test-utils';
import LoginPage from '.';
import { LoginUseCase } from '../../domain/use-cases/login.usecase';
import { UserPersistenceService } from '../../infra/services/user-persistence.service';
import { LoginMockUseCase } from '../../infra/use-cases/mock/login-mock.usecase';

let loginUseCase: LoginUseCase;
let userPersistenceService: UserPersistenceService;
let history: History;
let screen: ReturnType<typeof render>;

beforeEach(() => {
  loginUseCase = new LoginMockUseCase();
  userPersistenceService = new UserPersistenceService();
  history = {
    push: jest.fn(),
  } as unknown as History;
  screen = render(
    <LoginPage
      loginUseCase={loginUseCase}
      userPersistenceService={userPersistenceService}
      history={history}
    />
  );
});

describe('Login page', () => {
  it('is defined', () => {
    expect(LoginPage).toBeDefined();
  });
  it('has a username input', () => {
    const userNameInput = screen.getByPlaceholderText(/username/i);
    expect(userNameInput).toBeInTheDocument();
  });
  it('has a email input', () => {
    const emailInput = screen.getByPlaceholderText(/email/i);
    expect(emailInput).toBeInTheDocument();
  });
  it('has a submit button', () => {
    const submitButton = screen.getByRole('submit');
    expect(submitButton).toBeInTheDocument();
  });
  it('calls login usecase when clicked on button, with email and name', () => {
    jest.spyOn(loginUseCase, 'run');

    const inputData = {
      email: 'abc@def.com',
      name: 'abc',
    };
    const userNameInput = screen.getByPlaceholderText(/username/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const submitButton = screen.getByRole('submit');

    act(() => {
      fireEvent.change(userNameInput, {
        target: { value: inputData.name },
      });
      fireEvent.change(emailInput, {
        target: { value: inputData.email },
      });
    });
    act(() => {
      fireEvent.click(submitButton);
    });

    expect(loginUseCase.run).toBeCalledWith(inputData);
  });
});
