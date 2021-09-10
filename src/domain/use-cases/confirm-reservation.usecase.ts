export type ConfirmReservationUseCaseInput = {
  userId: string;
  carId: string;
  start: Date;
  end: Date;
};

export interface ConfirmReservationUseCase {
  run(payload: ConfirmReservationUseCaseInput): Promise<null>;
}
