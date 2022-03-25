import React, { useEffect, useMemo, useState } from 'react';
import SignInScreenView from './SignInScreenView';
import { SubmitHandler, useForm, FieldValues } from 'react-hook-form';
import { useSecret } from '../../../hooks/useSecret';
import { stringOnlyNum } from '../../../constants/regExp';
import {
  fetchUserSignIn,
  ISignInReq,
} from '../../../store/reducers/userSlice/asyncAction';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { tokenSlice } from '../../../store/reducers/tokenSlice/tokenSlice';
import { useUserStore } from '../../../hooks/useReducerHook/useUserStore';
import { useRouter } from '../../../hooks/useRouter';

const SingInScreen = () => {
  const { userInfo } = useUserStore();
  const { pushBack } = useRouter();
  const { encryptObj } = useSecret();
  const { control, handleSubmit, watch, setError, reset } = useForm<
    ISignInReq | FieldValues
  >();
  const dispatch = useAppDispatch();

  const [viewPassword, setViewPassword] = useState<boolean>(true);

  const currentFormData = watch() as ISignInReq;
  const activeButton = useMemo(
    () => !!(currentFormData.phone?.length && currentFormData.password?.length),
    [currentFormData]
  );

  useEffect(() => {
    if (userInfo?.name) {
      pushBack();
      reset({
        phone: '',
        password: '',
      });
    }
  }, [userInfo]);

  const onSubmit: SubmitHandler<ISignInReq | FieldValues> = async (data) => {
    data.phone = `+${stringOnlyNum(data.phone)}`;
    const { phone, password } = data;
    if (phone && password) {
      const secretData = encryptObj(data);
      dispatch(fetchUserSignIn(secretData)).then((loginData) => {
        const response = loginData.payload as unknown as
          | 'user login'
          | 'Ошибка api mobile/checkUser';
        if (response === 'user login') {
          dispatch(tokenSlice.actions.updateUser());
        }
        if (response === 'Ошибка api mobile/checkUser') {
          setError('password', {
            type: 'string',
            message: 'Некорректные данные',
          });
        }
      });
    }
  };

  const handleChangeViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  const handlePressButton = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <SignInScreenView
      activeButton={activeButton}
      passwordData={{
        viewPassword: viewPassword,
        setViewPassword: handleChangeViewPassword,
      }}
      formData={{
        control,
        handlePressButton,
      }}
    />
  );
};

export default React.memo(SingInScreen);
