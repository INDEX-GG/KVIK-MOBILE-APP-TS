import { IUserModel } from '../models/IUserModel';
import { IAdCardModel } from '../models/IAdCardModel';

export interface UserInfo {
  userId?: number | null;
  isAuth?: boolean;
  isLoading?: boolean;
  userInfo?: IUserModel | null;
}

export type AdsSortTitle =
  | 'По умолчанию'
  | 'Сначала новые'
  | 'Дешевле'
  | 'Дороже';

export type AdsSortValue =
  | 'default'
  | 'new'
  | 'price_by_ascending'
  | 'price_by_descending';

export interface IAdsSort {
  title: AdsSortTitle;
  value: AdsSortValue;
}

export interface IHomeAds {
  page: number;
  page_limit: number;
  sort: IAdsSort;
  user_id: number;
  region_excludes: string;
  region_includes: string;
  cards: IAdCardModel[];
  isLoadingAds: boolean;
  isUpdateAds: boolean;
  error: string;
}
