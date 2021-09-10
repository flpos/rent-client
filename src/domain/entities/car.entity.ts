export type Car = {
  id: string;
  brand: string;
  model: string;
  year: number;
  imageUrl: string;
};

export type CarDetail = Car & {
  color: string;
  kilometers: number;
};
