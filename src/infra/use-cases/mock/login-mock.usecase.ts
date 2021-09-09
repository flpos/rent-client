import {
  LoginUseCase,
  LoginUseCaseInput,
  LoginUseCaseOutput,
} from '../../../domain/use-cases/login.usecase';

export class LoginMockUsecase implements LoginUseCase {
  async run(payload: LoginUseCaseInput): Promise<LoginUseCaseOutput> {
    return {
      ...payload,
      id: 'some-id',
    };
  }
}
