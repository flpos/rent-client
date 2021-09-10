import {
  LoginUseCase,
  LoginUseCaseInput,
  LoginUseCaseOutput,
} from '../../../domain/use-cases/login.usecase';
import history from '../../services/history.service';

export class LoginMockUseCase implements LoginUseCase {
  async run(payload: LoginUseCaseInput): Promise<LoginUseCaseOutput> {
    history.push('/car');
    return {
      ...payload,
      id: 'some-id',
    };
  }
}
