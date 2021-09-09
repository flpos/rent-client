export type LoginUseCaseInput = {
  username: string;
  email: string;
};
export type LoginUseCaseOutput = LoginUseCaseInput & {
  id: string;
};

export interface LoginUseCase {
  run(payload: LoginUseCaseInput): Promise<LoginUseCaseOutput>;
}
