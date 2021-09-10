import {
  LoginUseCase,
  LoginUseCaseInput,
  LoginUseCaseOutput,
} from '../../../domain/use-cases/login.usecase';
import axiosInstance from '../../services/axios.service';

export class LoginAxiosUseCase implements LoginUseCase {
  async run(payload: LoginUseCaseInput): Promise<LoginUseCaseOutput> {
    const { data } = await axiosInstance.post<LoginUseCaseOutput>(
      'login',
      payload
    );
    return data;
  }
}
