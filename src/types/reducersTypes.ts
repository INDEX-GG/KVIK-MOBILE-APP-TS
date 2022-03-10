import { IUserModel } from '../models/IUserModel';
import { UserInfoType } from '../store/reducers/userInfoReducer';
import { IAdCardModel } from '../models/IAdCardModel';

export interface UserInfo {
  userId?: number | null;
  isAuth?: boolean;
  isLoading?: boolean;
  userInfo?: IUserModel | null;
}

export interface UserModelAction {
  type: UserInfoType;
  payload?: UserInfo;
}

export interface IHomeAds {
  page: number;
  page_limit: number;
  sort: string;
  user_id: number;
  region_excludes: string;
  region_includes: string;
  cards: IAdCardModel[];
  isLoading: boolean;
  error: string;
}
