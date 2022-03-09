export interface IUserModel {
  address: null | string;
  createdAt: string;
  email: null | string;
  favorites: number[] | null[];
  location: { name: string; geo: number[]; searchName: string };
  name: string;
  phone: string;
  raiting: null;
  subscribers_count: number;
  subscriptions: number[];
  subscriptions_count: number;
  userPhoto: null | string;
}
