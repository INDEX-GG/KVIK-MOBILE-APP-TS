import { UserInfo, UserModelAction } from '../../types/reducersTypes';

const defaultValue: Required<UserInfo> = {
  userId: null,
  isAuth: false,
  userInfo: null,
  isLoading: true,
};

export enum UserInfoType {
  IS_LOGIN = 'IS_LOGIN',
  IS_LOGOUT = 'IS_LOGOUT',
}

export const userInfoReducer = (
  state = defaultValue,
  action: UserModelAction
) => {
  switch (action.type) {
    case UserInfoType.IS_LOGIN:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        userId: action.payload.userId,
        userInfo: action.payload.userInfo,
      };
    case UserInfoType.IS_LOGOUT:
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        userId: null,
        userInfo: null,
      };
    default:
      return { ...state };
  }
};
